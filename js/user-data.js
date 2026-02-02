// ===== User Data Management =====
// Sync user data with Firebase Realtime Database

let userData = {
    quizScores: {},
    progress: {},
    favorites: [],
    diagnosticHistory: []
};

// Load user data from Firebase
async function loadUserData(uid) {
    try {
        const snapshot = await database.ref(`users/${uid}`).once('value');
        const data = snapshot.val();
        if (data) {
            userData = {
                quizScores: data.quizScores || {},
                progress: data.progress || {},
                favorites: data.favorites || [],
                diagnosticHistory: data.diagnosticHistory || []
            };
            // Update local UI
            if (typeof updateFavoritesUI === 'function') updateFavoritesUI();
            if (typeof updateProgressBars === 'function') updateProgressBars();
        }
        console.log('Données utilisateur chargées');
    } catch (error) {
        console.error('Erreur chargement données:', error);
    }
}

// Save quiz score
async function saveQuizScore(lessonId, score, total) {
    if (!currentUser) return;

    const scoreData = {
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toISOString()
    };

    userData.quizScores[lessonId] = scoreData;

    try {
        await database.ref(`users/${currentUser.uid}/quizScores/${lessonId}`).set(scoreData);
        console.log('Score sauvegardé:', lessonId, scoreData);
    } catch (error) {
        console.error('Erreur sauvegarde score:', error);
    }
}

// Get quiz score
function getQuizScore(lessonId) {
    return userData.quizScores[lessonId] || null;
}

// Save lesson progress
async function saveLessonProgress(moduleId, lessonId) {
    if (!currentUser) return;

    if (!userData.progress[moduleId]) {
        userData.progress[moduleId] = [];
    }

    if (!userData.progress[moduleId].includes(lessonId)) {
        userData.progress[moduleId].push(lessonId);

        try {
            await database.ref(`users/${currentUser.uid}/progress/${moduleId}`).set(userData.progress[moduleId]);
            if (typeof updateProgressBars === 'function') updateProgressBars();
            console.log('Progression sauvegardée:', moduleId, lessonId);
        } catch (error) {
            console.error('Erreur sauvegarde progression:', error);
        }
    }
}

// Get module progress
function getModuleProgressData(moduleId, totalLessons = 5) {
    const completed = userData.progress[moduleId] || [];
    return {
        completed: completed.length,
        total: totalLessons,
        percentage: Math.round((completed.length / totalLessons) * 100)
    };
}

// Save favorite
async function saveFavorite(lessonId, title, moduleIcon, moduleName) {
    if (!currentUser) return;

    const exists = userData.favorites.find(f => f.lessonId === lessonId);
    if (exists) return;

    const favorite = {
        lessonId: lessonId,
        title: title,
        moduleIcon: moduleIcon,
        moduleName: moduleName,
        addedAt: new Date().toISOString()
    };

    userData.favorites.push(favorite);

    try {
        await database.ref(`users/${currentUser.uid}/favorites`).set(userData.favorites);
        if (typeof updateFavoritesUI === 'function') updateFavoritesUI();
        console.log('Favori ajouté:', lessonId);
    } catch (error) {
        console.error('Erreur ajout favori:', error);
    }
}

// Remove favorite
async function removeFavoriteData(lessonId) {
    if (!currentUser) return;

    userData.favorites = userData.favorites.filter(f => f.lessonId !== lessonId);

    try {
        await database.ref(`users/${currentUser.uid}/favorites`).set(userData.favorites);
        if (typeof updateFavoritesUI === 'function') updateFavoritesUI();
        console.log('Favori supprimé:', lessonId);
    } catch (error) {
        console.error('Erreur suppression favori:', error);
    }
}

// Check if lesson is favorite
function isFavorite(lessonId) {
    return userData.favorites.some(f => f.lessonId === lessonId);
}

// Get all favorites
function getFavorites() {
    return userData.favorites;
}

// Save diagnostic history
async function saveDiagnosticResult(vehicleType, symptoms, results) {
    if (!currentUser) return;

    const entry = {
        vehicleType: vehicleType,
        symptoms: symptoms,
        results: results,
        date: new Date().toISOString()
    };

    userData.diagnosticHistory.unshift(entry);

    // Keep only last 50 entries
    if (userData.diagnosticHistory.length > 50) {
        userData.diagnosticHistory = userData.diagnosticHistory.slice(0, 50);
    }

    try {
        await database.ref(`users/${currentUser.uid}/diagnosticHistory`).set(userData.diagnosticHistory);
        console.log('Diagnostic sauvegardé');
    } catch (error) {
        console.error('Erreur sauvegarde diagnostic:', error);
    }
}

// Get diagnostic history
function getDiagnosticHistory() {
    return userData.diagnosticHistory;
}

// Get user statistics
function getUserStats() {
    const totalQuizzes = Object.keys(userData.quizScores).length;
    let totalScore = 0;
    let totalPossible = 0;

    Object.values(userData.quizScores).forEach(score => {
        totalScore += score.score;
        totalPossible += score.total;
    });

    const averageScore = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;

    let completedLessons = 0;
    Object.values(userData.progress).forEach(lessons => {
        completedLessons += lessons.length;
    });

    return {
        totalQuizzes: totalQuizzes,
        averageScore: averageScore,
        completedLessons: completedLessons,
        favoritesCount: userData.favorites.length,
        diagnosticsCount: userData.diagnosticHistory.length
    };
}
