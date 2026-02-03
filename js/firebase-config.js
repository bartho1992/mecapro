// ===== Firebase Configuration =====
// Import Firebase SDK via CDN (loaded in HTML)

const firebaseConfig = {
    apiKey: "AIzaSyB0GBfwxCNG0U_FdL1gLsm_7LiUPEvN6yo",
    authDomain: "mecapro-91b76.firebaseapp.com",
    databaseURL: "https://mecapro-91b76-default-rtdb.firebaseio.com",
    projectId: "mecapro-91b76",
    storageBucket: "mecapro-91b76.firebasestorage.app",
    messagingSenderId: "373721328013",
    appId: "1:373721328013:web:a0c1b9470c0e2a1364f5c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to services
const auth = firebase.auth();
const database = firebase.database();

// Auth state observer
let currentUser = null;

auth.onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {
        console.log('Utilisateur connecté:', user.email);
        updateUIForLoggedInUser(user);

        // Enregistrer la session si le gestionnaire est présent
        if (typeof SessionManager !== 'undefined') {
            SessionManager.registerSession(user.uid);

            // Vérifier si la session est révoquée
            SessionManager.checkSessionStatus(user.uid, () => {
                auth.signOut();
                alert('Votre session a été révoquée (déconnexion à distance)');
                window.location.reload();
            });
        }
    } else {
        console.log('Utilisateur non connecté');
        updateUIForLoggedOutUser();
    }
});

// Update UI based on auth state
function updateUIForLoggedInUser(user) {
    const userInfo = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (userInfo) {
        userInfo.textContent = user.email;
        userInfo.style.display = 'inline';
    }
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline';

    // Load user data
    loadUserData(user.uid);
}

function updateUIForLoggedOutUser() {
    const userInfo = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (userInfo) userInfo.style.display = 'none';
    if (loginBtn) loginBtn.style.display = 'inline';
    if (logoutBtn) logoutBtn.style.display = 'none';
}

// Check if user is supervisor (anciennement admin)
async function isUserAdmin(uid) {
    const snapshot = await database.ref(`users/${uid}/role`).once('value');
    return snapshot.val() === 'superviseur';
}

// Redirect to login if not authenticated
function requireAuth() {
    if (!currentUser) {
        window.location.href = '/pages/login.html';
        return false;
    }
    return true;
}

// Redirect to home if not admin
async function requireAdmin() {
    if (!currentUser) {
        window.location.href = '/pages/login.html';
        return false;
    }
    const isAdmin = await isUserAdmin(currentUser.uid);
    if (!isAdmin) {
        alert('Accès réservé aux superviseurs');
        window.location.href = '/index.html';
        return false;
    }
    return true;
}
