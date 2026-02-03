// ===== Authentication Functions =====

// Login with email and password
async function loginUser(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('Connexion réussie:', userCredential.user.email);

        // Register device if device-tracker is loaded
        if (typeof registerDevice === 'function') {
            await registerDevice(userCredential.user.uid);
            listenForForceDisconnect(userCredential.user.uid);
        }

        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Erreur de connexion:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Logout
async function logoutUser() {
    try {
        // Unregister device if device-tracker is loaded
        if (typeof unregisterDevice === 'function' && currentUser) {
            await unregisterDevice(currentUser.uid);
        }

        await auth.signOut();
        console.log('Déconnexion réussie');
        // Détecter le chemin relatif vers login.html
        const isInPagesFolder = window.location.pathname.includes('/pages/');
        const loginPath = isInPagesFolder ? 'login.html' : 'pages/login.html';
        window.location.href = loginPath;
    } catch (error) {
        console.error('Erreur de déconnexion:', error);
    }
}

// Create user (superviseur only)
async function createUser(email, password, displayName, role = 'user') {
    try {
        // Check if current user is superviseur
        if (!currentUser || !(await isUserAdmin(currentUser.uid))) {
            return { success: false, error: 'Réservé aux superviseurs' };
        }

        // Create user in Firebase Auth
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const newUser = userCredential.user;

        // Update display name
        await newUser.updateProfile({ displayName: displayName });

        // Create user document in database
        await database.ref(`users/${newUser.uid}`).set({
            email: email,
            displayName: displayName,
            role: role,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            quizScores: {},
            progress: {},
            favorites: [],
            diagnosticHistory: []
        });

        console.log('Utilisateur créé:', email);
        return { success: true, user: newUser };
    } catch (error) {
        console.error('Erreur création utilisateur:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Delete user (admin only)
async function deleteUser(uid) {
    try {
        if (!currentUser || !(await isUserAdmin(currentUser.uid))) {
            return { success: false, error: 'Non autorisé' };
        }

        // Delete user data from database
        await database.ref(`users/${uid}`).remove();

        // Note: Deleting auth user requires Admin SDK (server-side)
        // For now, we just remove the database entry

        return { success: true };
    } catch (error) {
        console.error('Erreur suppression:', error);
        return { success: false, error: error.message };
    }
}

// Get all users (admin only)
async function getAllUsers() {
    try {
        if (!currentUser || !(await isUserAdmin(currentUser.uid))) {
            return [];
        }

        const snapshot = await database.ref('users').once('value');
        const users = [];
        snapshot.forEach((child) => {
            users.push({ uid: child.key, ...child.val() });
        });
        return users;
    } catch (error) {
        console.error('Erreur récupération utilisateurs:', error);
        return [];
    }
}

// Reset password
async function resetPassword(email) {
    try {
        await auth.sendPasswordResetEmail(email);
        return { success: true };
    } catch (error) {
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Error messages in French
function getErrorMessage(code) {
    const messages = {
        'auth/invalid-email': 'Adresse e-mail invalide',
        'auth/user-disabled': 'Compte désactivé',
        'auth/user-not-found': 'Utilisateur non trouvé',
        'auth/wrong-password': 'Mot de passe incorrect',
        'auth/email-already-in-use': 'Cette adresse e-mail est déjà utilisée',
        'auth/weak-password': 'Le mot de passe doit contenir au moins 6 caractères',
        'auth/too-many-requests': 'Trop de tentatives, réessayez plus tard',
        'auth/network-request-failed': 'Erreur réseau, vérifiez votre connexion'
    };
    return messages[code] || 'Une erreur est survenue';
}
