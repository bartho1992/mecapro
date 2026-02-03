// ===== Device Tracking Module =====
// Track connected devices and sessions for users

// Generate a unique session ID
function generateSessionId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Get device info from user agent
function getDeviceInfo() {
    const ua = navigator.userAgent;
    let browser = 'Inconnu';
    let os = 'Inconnu';
    let deviceType = 'desktop';

    // Detect browser
    if (ua.includes('Firefox')) {
        browser = 'Firefox';
    } else if (ua.includes('Edg')) {
        browser = 'Microsoft Edge';
    } else if (ua.includes('Chrome')) {
        browser = 'Chrome';
    } else if (ua.includes('Safari')) {
        browser = 'Safari';
    } else if (ua.includes('Opera') || ua.includes('OPR')) {
        browser = 'Opera';
    }

    // Detect OS
    if (ua.includes('Windows NT 10')) {
        os = 'Windows 10/11';
    } else if (ua.includes('Windows')) {
        os = 'Windows';
    } else if (ua.includes('Mac OS X')) {
        os = 'macOS';
    } else if (ua.includes('Android')) {
        os = 'Android';
        deviceType = 'mobile';
    } else if (ua.includes('iPhone') || ua.includes('iPad')) {
        os = 'iOS';
        deviceType = ua.includes('iPad') ? 'tablet' : 'mobile';
    } else if (ua.includes('Linux')) {
        os = 'Linux';
    }

    // Device type icon
    let deviceIcon = '💻';
    if (deviceType === 'mobile') deviceIcon = '📱';
    if (deviceType === 'tablet') deviceIcon = '📱';

    return {
        browser,
        os,
        deviceType,
        deviceIcon,
        userAgent: ua
    };
}

// Get IP address using external service
async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Erreur récupération IP:', error);
        return 'Inconnue';
    }
}

// Register device on login
async function registerDevice(userId) {
    const sessionId = generateSessionId();
    const deviceInfo = getDeviceInfo();
    const ipAddress = await getIPAddress();

    const deviceData = {
        sessionId: sessionId,
        browser: deviceInfo.browser,
        os: deviceInfo.os,
        deviceType: deviceInfo.deviceType,
        deviceIcon: deviceInfo.deviceIcon,
        ipAddress: ipAddress,
        loginAt: firebase.database.ServerValue.TIMESTAMP,
        lastActive: firebase.database.ServerValue.TIMESTAMP,
        isActive: true
    };

    // Save session to database
    await database.ref(`devices/${userId}/${sessionId}`).set(deviceData);

    // Store session ID locally
    localStorage.setItem('mecapro_session_id', sessionId);

    console.log('Appareil enregistré:', sessionId);
    return sessionId;
}

// Update last active timestamp
async function updateLastActive(userId) {
    const sessionId = localStorage.getItem('mecapro_session_id');
    if (sessionId && userId) {
        await database.ref(`devices/${userId}/${sessionId}/lastActive`).set(
            firebase.database.ServerValue.TIMESTAMP
        );
    }
}

// Remove device session on logout
async function unregisterDevice(userId) {
    const sessionId = localStorage.getItem('mecapro_session_id');
    if (sessionId && userId) {
        await database.ref(`devices/${userId}/${sessionId}`).update({
            isActive: false,
            logoutAt: firebase.database.ServerValue.TIMESTAMP
        });
        localStorage.removeItem('mecapro_session_id');
        console.log('Appareil déconnecté:', sessionId);
    }
}

// Force disconnect a device (for supervisors)
async function forceDisconnectDevice(userId, sessionId) {
    try {
        await database.ref(`devices/${userId}/${sessionId}`).update({
            isActive: false,
            forcedDisconnect: true,
            logoutAt: firebase.database.ServerValue.TIMESTAMP
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Get all devices for a user
async function getUserDevices(userId) {
    const snapshot = await database.ref(`devices/${userId}`).once('value');
    const devices = [];

    if (snapshot.exists()) {
        snapshot.forEach(child => {
            devices.push({
                ...child.val(),
                sessionId: child.key
            });
        });
    }

    // Sort by login time (most recent first)
    devices.sort((a, b) => (b.loginAt || 0) - (a.loginAt || 0));

    return devices;
}

// Get active devices for a user
async function getActiveDevices(userId) {
    const devices = await getUserDevices(userId);
    return devices.filter(d => d.isActive);
}

// Check if current session is still valid
async function checkSessionValid(userId) {
    const sessionId = localStorage.getItem('mecapro_session_id');
    if (!sessionId || !userId) return true; // No session to check

    const snapshot = await database.ref(`devices/${userId}/${sessionId}`).once('value');
    if (!snapshot.exists()) return true;

    const device = snapshot.val();
    if (device.forcedDisconnect) {
        // Session was force-disconnected
        alert('Votre session a été déconnectée par un superviseur.');
        await auth.signOut();
        return false;
    }

    return true;
}

// Clean old inactive sessions (older than 30 days)
async function cleanOldSessions(userId) {
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    const devices = await getUserDevices(userId);

    for (const device of devices) {
        if (!device.isActive && device.logoutAt && device.logoutAt < thirtyDaysAgo) {
            await database.ref(`devices/${userId}/${device.sessionId}`).remove();
        }
    }
}

// Listen for force disconnect
function listenForForceDisconnect(userId) {
    const sessionId = localStorage.getItem('mecapro_session_id');
    if (!sessionId || !userId) return;

    database.ref(`devices/${userId}/${sessionId}/forcedDisconnect`).on('value', (snapshot) => {
        if (snapshot.val() === true) {
            alert('Votre session a été déconnectée à distance.');
            localStorage.removeItem('mecapro_session_id');
            auth.signOut();
        }
    });
}
