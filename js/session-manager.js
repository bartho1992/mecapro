/**
 * Session Manager
 * Handles device identification and session tracking
 */

const SessionManager = {
    // Generate or retrieve a unique device ID
    getDeviceId: function () {
        let deviceId = localStorage.getItem('device_id');
        if (!deviceId) {
            deviceId = 'dev_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
            localStorage.setItem('device_id', deviceId);
        }
        return deviceId;
    },

    // Get device information (OS, Browser, IP)
    getDeviceInfo: async function () {
        const ua = navigator.userAgent;
        let os = "Inconnu";
        let browser = "Inconnu";

        // Detect OS
        if (ua.indexOf("Win") !== -1) os = "Windows";
        if (ua.indexOf("Mac") !== -1) os = "MacOS";
        if (ua.indexOf("Linux") !== -1) os = "Linux";
        if (ua.indexOf("Android") !== -1) os = "Android";
        if (ua.indexOf("like Mac") !== -1) os = "iOS";

        // Detect Browser
        if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
        else if (ua.indexOf("SamsungBrowser") !== -1) browser = "Samsung Internet";
        else if (ua.indexOf("Opera") !== -1 || ua.indexOf("OPR") !== -1) browser = "Opera";
        else if (ua.indexOf("Trident") !== -1) browser = "Internet Explorer";
        else if (ua.indexOf("Edge") !== -1) browser = "Edge";
        else if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
        else if (ua.indexOf("Safari") !== -1) browser = "Safari";

        let ip = "Non disponible";
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            ip = data.ip;
        } catch (e) {
            console.warn("Impossible de récupérer l'IP", e);
        }

        return {
            deviceId: this.getDeviceId(),
            os: os,
            browser: browser,
            ip: ip,
            userAgent: ua,
            lastActive: firebase.database.ServerValue.TIMESTAMP
        };
    },

    // Register current session in Firebase
    registerSession: async function (uid) {
        if (!uid) return;

        const deviceInfo = await this.getDeviceInfo();

        // Add creation time only if it doesn't exist (we'll use update)
        // Actually, for a fresh login, we might want to set creation time if it's a new session node
        // But since we use deviceID, it persists across logins on the same browser. 
        // Let's just update lastActive and static info in case IP changed.

        const sessionRef = database.ref(`users/${uid}/sessions/${deviceInfo.deviceId}`);

        // Check if session exists to preserve creationTime
        const snapshot = await sessionRef.once('value');
        if (!snapshot.exists()) {
            deviceInfo.createdAt = firebase.database.ServerValue.TIMESTAMP;
        }

        await sessionRef.update(deviceInfo);
        console.log('Session enregistrée:', deviceInfo.deviceId);
    },

    // Update heartbeat (last active timestamp)
    updateHeartbeat: async function (uid) {
        if (!uid) return;
        const deviceId = this.getDeviceId();
        await database.ref(`users/${uid}/sessions/${deviceId}`).update({
            lastActive: firebase.database.ServerValue.TIMESTAMP
        });
    },

    // Check if session is still valid (exists in DB)
    checkSessionStatus: function (uid, onRevoked) {
        if (!uid) return;
        const deviceId = this.getDeviceId();
        const sessionRef = database.ref(`users/${uid}/sessions/${deviceId}`);

        sessionRef.on('value', (snapshot) => {
            // If snapshot doesn't exist, it means the session was deleted (revoked)
            if (!snapshot.exists()) {
                if (typeof onRevoked === 'function') {
                    onRevoked();
                }
            }
        });
    },

    // Revoke a specific session (Supervisor only)
    revokeSession: async function (targetUid, targetDeviceId) {
        // Validation should be done by security rules or calling function checking admin role
        await database.ref(`users/${targetUid}/sessions/${targetDeviceId}`).remove();
    }
};
