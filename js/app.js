// ===== MécaPro - Application JavaScript =====

// Data Store
const AppData = {
    // Favorites stored in localStorage
    favorites: JSON.parse(localStorage.getItem('mecapro_favorites')) || [],

    // Progress stored in localStorage
    progress: JSON.parse(localStorage.getItem('mecapro_progress')) || {},

    // Quiz scores
    quizScores: JSON.parse(localStorage.getItem('mecapro_quiz_scores')) || {}
};

// ===== Favorites System =====
function toggleFavorite(lessonId, lessonTitle, moduleIcon, moduleName) {
    const index = AppData.favorites.findIndex(f => f.id === lessonId);

    if (index > -1) {
        // Remove from favorites
        AppData.favorites.splice(index, 1);
        showToast('Retiré des favoris', 'info');
    } else {
        // Add to favorites
        AppData.favorites.push({
            id: lessonId,
            title: lessonTitle,
            icon: moduleIcon,
            module: moduleName
        });
        showToast('Ajouté aux favoris ❤️', 'success');
    }

    saveFavorites();
    updateFavoritesUI();
    updateFavoriteButtons();
}

function saveFavorites() {
    localStorage.setItem('mecapro_favorites', JSON.stringify(AppData.favorites));
}

function updateFavoritesUI() {
    // Update counter
    const countElement = document.getElementById('favoritesCount');
    if (countElement) {
        countElement.textContent = AppData.favorites.length;
    }

    // Update favorites list in modal
    const listElement = document.getElementById('favoritesList');
    if (listElement) {
        if (AppData.favorites.length === 0) {
            listElement.innerHTML = '<p class="empty-favorites">Aucun favori pour le moment</p>';
        } else {
            listElement.innerHTML = AppData.favorites.map(fav => `
                <div class="favorite-item">
                    <div class="favorite-info">
                        <span class="favorite-icon">${fav.icon}</span>
                        <div>
                            <div class="favorite-title">${fav.title}</div>
                            <div class="favorite-module">${fav.module}</div>
                        </div>
                    </div>
                    <button class="remove-favorite" onclick="removeFavorite('${fav.id}')" title="Retirer">
                        ✕
                    </button>
                </div>
            `).join('');
        }
    }
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const lessonId = btn.dataset.lessonId;
        const isFavorite = AppData.favorites.some(f => f.id === lessonId);
        btn.classList.toggle('active', isFavorite);
        btn.innerHTML = isFavorite ? '❤️' : '🤍';
    });
}

function removeFavorite(lessonId) {
    const index = AppData.favorites.findIndex(f => f.id === lessonId);
    if (index > -1) {
        AppData.favorites.splice(index, 1);
        saveFavorites();
        updateFavoritesUI();
        updateFavoriteButtons();
        showToast('Retiré des favoris', 'info');
    }
}

function showFavorites() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
        modal.classList.add('active');
        updateFavoritesUI();
    }
}

function closeFavorites() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ===== Progress System =====
function updateProgress(moduleId, lessonId) {
    if (!AppData.progress[moduleId]) {
        AppData.progress[moduleId] = [];
    }

    if (!AppData.progress[moduleId].includes(lessonId)) {
        AppData.progress[moduleId].push(lessonId);
        localStorage.setItem('mecapro_progress', JSON.stringify(AppData.progress));
    }

    updateProgressBars();
}

function getModuleProgress(moduleId, totalLessons = 5) {
    const completed = AppData.progress[moduleId]?.length || 0;
    return Math.round((completed / totalLessons) * 100);
}

function updateProgressBars() {
    document.querySelectorAll('.module-card').forEach(card => {
        const moduleId = card.dataset.module;
        const progressBar = card.querySelector('.progress-fill');
        if (progressBar && moduleId) {
            const progress = getModuleProgress(moduleId);
            progressBar.style.width = `${progress}%`;
        }
    });
}

// ===== Quiz System =====
function initQuiz(quizContainer, questions, lessonId, moduleId) {
    let currentAnswers = {};

    const questionsHTML = questions.map((q, index) => `
        <div class="quiz-question" data-question="${index}">
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((option, optIndex) => `
                    <label class="quiz-option" data-correct="${optIndex === q.correct}">
                        <input type="radio" name="q${index}" value="${optIndex}">
                        <span>${option}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');

    quizContainer.innerHTML = `
        <h3>📝 Quiz - Testez vos connaissances</h3>
        ${questionsHTML}
        <button class="btn btn-primary submit-quiz" onclick="submitQuiz(this, '${lessonId}', '${moduleId}')">
            Valider mes réponses
        </button>
        <div class="quiz-result" id="quizResult" style="display: none;"></div>
    `;

    // Add click handlers
    quizContainer.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
            const question = option.closest('.quiz-question');
            question.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            option.querySelector('input').checked = true;
        });
    });
}

function submitQuiz(button, lessonId, moduleId) {
    const container = button.closest('.quiz-section');
    const questions = container.querySelectorAll('.quiz-question');
    let correct = 0;
    let total = questions.length;

    questions.forEach(q => {
        const selected = q.querySelector('.quiz-option.selected');
        const correctOption = q.querySelector('.quiz-option[data-correct="true"]');

        if (selected) {
            if (selected === correctOption) {
                selected.classList.add('correct');
                correct++;
            } else {
                selected.classList.add('incorrect');
                correctOption.classList.add('correct');
            }
        } else {
            correctOption.classList.add('correct');
        }
    });

    const score = Math.round((correct / total) * 100);
    const resultDiv = container.querySelector('#quizResult');
    const isSuccess = score >= 60;

    resultDiv.className = `quiz-result ${isSuccess ? 'success' : 'failure'}`;
    resultDiv.innerHTML = `
        <div class="quiz-score">${score}%</div>
        <p>${correct}/${total} réponses correctes</p>
        <p>${isSuccess ? '🎉 Bravo ! Vous avez réussi !' : '📚 Continuez à apprendre et réessayez !'}</p>
    `;
    resultDiv.style.display = 'block';

    // Save score
    AppData.quizScores[lessonId] = { score, correct, total };
    localStorage.setItem('mecapro_quiz_scores', JSON.stringify(AppData.quizScores));

    // Update progress if passed
    if (isSuccess) {
        updateProgress(moduleId, lessonId);
    }

    // Disable button
    button.disabled = true;
    button.textContent = 'Quiz terminé';

    // Disable options
    container.querySelectorAll('.quiz-option input').forEach(input => {
        input.disabled = true;
    });
}

// ===== Lesson Modal =====
function openLesson(lessonData) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('lessonModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lessonModal';
        modal.className = 'modal lesson-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${lessonData.icon} ${lessonData.title}</h3>
                <button class="modal-close" onclick="closeLessonModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="lesson-illustration">
                    <img src="${lessonData.image}" class="lesson-image" alt="${lessonData.title}" 
                         style="cursor: pointer;" 
                         onclick="openImageFullscreen(this.src)"
                         onerror="this.parentElement.innerHTML='<div style=\\'font-size:5rem;\\'>${lessonData.icon}</div>'">
                </div>
                <div class="lesson-content">
                    <h2>${lessonData.title}</h2>
                    <p>${lessonData.description}</p>
                    
                    <h4>📖 Ce que vous allez apprendre :</h4>
                    <ul>
                        ${lessonData.points.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                    
                    <div class="quiz-section" id="lessonQuiz"></div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Initialize quiz
    if (lessonData.quiz) {
        const quizContainer = modal.querySelector('#lessonQuiz');
        initQuiz(quizContainer, lessonData.quiz, lessonData.id, lessonData.moduleId);
    }

    // Update progress when opened
    updateProgress(lessonData.moduleId, lessonData.id);
}

function closeLessonModal() {
    const modal = document.getElementById('lessonModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ===== Fullscreen Image Modal =====
function openImageFullscreen(imageSrc) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('imageFullscreenModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageFullscreenModal';
        modal.className = 'modal image-fullscreen-modal';
        modal.onclick = (e) => {
            if (e.target === modal || e.target.classList.contains('fullscreen-close')) {
                closeImageFullscreen();
            }
        };
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <span class="fullscreen-close">&times;</span>
        <img src="${imageSrc}" class="fullscreen-image" alt="Fullscreen View">
    `;

    modal.classList.add('active');
}

function closeImageFullscreen() {
    const modal = document.getElementById('imageFullscreenModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ===== Toast Notifications =====
function showToast(message, type = 'info') {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ef4444' : '#00d4ff'};
        color: #0a0a0f;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.module-card, .feature-card, .lesson-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Close modals on click outside =====
function initModalClose() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
    initModalClose();
    updateFavoritesUI();
    updateFavoriteButtons();
    updateProgressBars();
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(20px); }
    }
`;
document.head.appendChild(style);
