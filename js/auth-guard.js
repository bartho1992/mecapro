// ===== Auth Guard - Protection des pages =====
// Ce script vérifie si l'utilisateur est connecté et redirige vers la page de connexion si nécessaire

(function() {
    'use strict';

    // Détecter le chemin relatif vers la racine
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    const loginPath = isInPagesFolder ? 'login.html' : 'pages/login.html';
    
    // Pages qui ne nécessitent pas d'authentification
    const publicPages = ['login.html', 'setup-admin.html'];
    
    // Vérifier si on est sur une page publique
    const currentPage = window.location.pathname.split('/').pop();
    const isPublicPage = publicPages.some(page => currentPage.includes(page));
    
    if (isPublicPage) {
        // Ne pas vérifier l'auth sur les pages publiques
        return;
    }

    // Afficher un écran de chargement pendant la vérification
    function showLoadingScreen() {
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'auth-loading-overlay';
        loadingOverlay.innerHTML = `
            <style>
                #auth-loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 999999;
                    font-family: 'Inter', 'Poppins', sans-serif;
                }
                #auth-loading-overlay .loader-container {
                    text-align: center;
                }
                #auth-loading-overlay .loader-icon {
                    font-size: 4rem;
                    animation: bounce 1s ease-in-out infinite;
                    margin-bottom: 1rem;
                }
                #auth-loading-overlay .loader-text {
                    color: #ffffff;
                    font-size: 1.2rem;
                    font-weight: 500;
                }
                #auth-loading-overlay .loader-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(255,255,255,0.3);
                    border-top-color: #00d9ff;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 1.5rem auto;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            </style>
            <div class="loader-container">
                <div class="loader-icon">⚙️</div>
                <div class="loader-spinner"></div>
                <p class="loader-text">Vérification de l'authentification...</p>
            </div>
        `;
        document.body.insertBefore(loadingOverlay, document.body.firstChild);
    }

    function hideLoadingScreen() {
        const overlay = document.getElementById('auth-loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
        }
    }

    // Attendre que Firebase soit chargé
    function waitForFirebase(callback) {
        if (typeof firebase !== 'undefined' && firebase.auth) {
            callback();
        } else {
            setTimeout(() => waitForFirebase(callback), 50);
        }
    }

    // Afficher l'écran de chargement immédiatement
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showLoadingScreen);
    } else {
        showLoadingScreen();
    }

    // Vérifier l'authentification
    waitForFirebase(function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // Utilisateur connecté - afficher la page
                hideLoadingScreen();
                console.log('✅ Utilisateur authentifié:', user.email);
            } else {
                // Utilisateur non connecté - rediriger vers login
                console.log('🔒 Accès refusé - Redirection vers la connexion');
                window.location.replace(loginPath);
            }
        });
    });
})();
