// ===== Module Tracteur - Version Professionnelle =====
const tracteurLessons = [
    {
        id: 'tracteur-1', title: 'Moteur Diesel Agricole', icon: '🚜', level: 'Débutant', duration: '30 min',
        description: 'Spécificités des moteurs diesel agricoles : couple, refroidissement, entretien.',
        image: '../images/tracteur-diesel.png',
        content: {
            intro: 'Les moteurs agricoles sont conçus pour le couple à bas régime et la durabilité. Ils fonctionnent souvent à pleine charge pendant des heures.',
            sections: [
                { title: '⚙️ Caractéristiques', content: '<strong>Cylindrée :</strong> 3L à 16L selon puissance\n<strong>Couple :</strong> Maximum à 1200-1600 tr/min\n<strong>Refroidissement :</strong> Circuit pressurisé + ventilateur\n<strong>Filtre à air :</strong> Cyclonique + cartouche sèche' },
                { title: '💨 Système d\'injection', content: '<strong>Pompe rotative ou Common Rail</strong>\nPression : 200-2000 bars\nPréchauffage : bougies de chauffe\nCoupure : électrovanne stop' },
                { title: '🌱 Dépollution', content: '<strong>Stage V (équivalent Euro 6)</strong>\nEGR + FAP + SCR (AdBlue)\nRégénération FAP automatique ou manuelle\nConsommation AdBlue : 3-5% du gasoil' },
                { title: '🔧 Entretien', content: 'Filtre à huile : toutes les 250-500 h\nFiltre gasoil : 500 h\nFiltre à air : 500 h ou selon indicateur\nVidange : huile 15W-40 ou 10W-40, 500 h' }
            ]
        },
        quiz: [
            { question: 'Régime couple maxi tracteur ?', options: ['800 tr/min', '1200-1600 tr/min', '2500 tr/min', '4000 tr/min'], correct: 1, explanation: 'Le couple max est atteint à 1200-1600 tr/min pour la traction.' },
            { question: 'Intervalle vidange moteur ?', options: ['100 h', '250-500 h', '1000 h', '2000 h'], correct: 1, explanation: 'Vidange toutes les 250-500 heures selon constructeur.' },
            { question: 'Norme dépollution actuelle ?', options: ['Tier 2', 'Stage III', 'Stage V', 'Euro 4'], correct: 2, explanation: 'Stage V est la norme actuelle équivalente à Euro 6.' },
            { question: 'Consommation AdBlue/gasoil ?', options: ['0.5%', '3-5%', '10%', '20%'], correct: 1, explanation: '3-5% du gasoil consommé.' },
            { question: 'Type filtre à air tracteur ?', options: ['Mousse huilée', 'Cyclonique + sec', 'Papier simple', 'Aucun'], correct: 1, explanation: 'Pré-filtre cyclonique + cartouche sèche pour la poussière.' }
        ]
    },
    {
        id: 'tracteur-2', title: 'Hydraulique Agricole', icon: '💧', level: 'Avancé', duration: '40 min',
        description: 'Maîtrisez le circuit hydraulique : pompe, distributeurs, vérins, relevage.',
        image: '../images/tracteur-hydraulic.png',
        content: {
            intro: 'L\'hydraulique est le nerf du tracteur. Elle alimente le relevage, la direction, les outils et la transmission sur certains modèles.',
            sections: [
                { title: '🔧 Circuit principal', content: '<strong>Pompe :</strong> À engrenages ou à pistons, 40-200 L/min\n<strong>Pression :</strong> 180-220 bars\n<strong>Filtre :</strong> Retour + aspiration\n<strong>Réservoir :</strong> 30-100 litres' },
                { title: '⚙️ Distributeurs', content: '<strong>Types :</strong> Simple ou double effet\n<strong>Commande :</strong> Mécanique ou électro-hydraulique\n<strong>Position neutre :</strong> Centre fermé ou ouvert\n<strong>Load Sensing :</strong> Débit adapté à la demande' },
                { title: '🔼 Relevage arrière', content: '<strong>Capacité :</strong> 3-15 tonnes\n<strong>Commandes :</strong> Position, effort, mixte\n<strong>Vérins :</strong> Double effet à amortissement\n<strong>Contrôle :</strong> Électronique (EHR, Hitch)' },
                { title: '⚠️ Entretien', content: 'Huile : UTTO ou THF, 1000-2000 h\nFiltre : 500 h\nContrôle niveau : quotidien\nCouleur/odeur : détecte surchauffe\nPurge air : après intervention' }
            ]
        },
        quiz: [
            { question: 'Pression hydraulique tracteur ?', options: ['50 bars', '100 bars', '180-220 bars', '400 bars'], correct: 2, explanation: 'Pression standard 180-220 bars.' },
            { question: 'Qu\'est-ce que Load Sensing ?', options: ['Capteur poids', 'Débit adapté à la demande', 'Mesure température', 'Détection fuite'], correct: 1, explanation: 'Le Load Sensing adapte le débit à la charge réelle.' },
            { question: 'Intervalle vidange huile hydraulique ?', options: ['250 h', '500 h', '1000-2000 h', '5000 h'], correct: 2, explanation: 'Vidange toutes les 1000-2000 heures.' },
            { question: 'Capacité relevage gros tracteur ?', options: ['1-2 tonnes', '5-8 tonnes', '10-15 tonnes', '25 tonnes'], correct: 2, explanation: 'Les gros tracteurs relèvent 10-15 tonnes.' },
            { question: 'Type huile hydraulique ?', options: ['10W-40 moteur', 'UTTO / THF', 'ATF', 'Huile minérale pure'], correct: 1, explanation: 'UTTO (Universal Tractor Transmission Oil) ou THF.' }
        ]
    },
    {
        id: 'tracteur-3', title: 'Transmission et Prise de Force', icon: '⚙️', level: 'Intermédiaire', duration: '35 min',
        description: 'Boîtes powershift, CVT et fonctionnement de la prise de force.',
        image: '../images/tracteur-transmission.png',
        content: {
            intro: 'La transmission agricole doit offrir une large plage de vitesses et un contrôle précis de la prise de force.',
            sections: [
                { title: '🔢 Types de boîtes', content: '<strong>Synchro :</strong> Manuelle, économique\n<strong>Powershift :</strong> Embrayages sous charge\n<strong>CVT :</strong> Variation continue hydrostatique\n<strong>Avantages CVT :</strong> Confort, économie, précision' },
                { title: '⚡ Prise de force (PDF)', content: '<strong>Régimes standards :</strong> 540 / 540E / 1000 tr/min\n<strong>540E :</strong> 540 tr/min à régime réduit = économie\n<strong>Cannelures :</strong> 6 (540) ou 21 (1000)\n<strong>Protection :</strong> Carter + embrayage progressif' },
                { title: '🔄 Pont avant', content: '<strong>4RM :</strong> Enclenchement manuel ou auto\n<strong>Blocage différentiel :</strong> Manuel ou automatique\n<strong>Rapport :</strong> Surviré pour braquage\n<strong>Désengagement :</strong> Au braquage ou pédale dédiée' },
                { title: '🔧 Entretien', content: 'Huile transmission : UTTO, 2000 h\nFiltre aspiration : 1000 h\nContrôle étanchéité joints\nRéglage embrayage PDF\nNiveau quotidien sur voyant' }
            ]
        },
        quiz: [
            { question: 'Régimes PDF standards ?', options: ['100/200', '540/1000', '1500/2000', '3000/4000'], correct: 1, explanation: '540 et 1000 tr/min sont les régimes normalisés.' },
            { question: 'Avantage transmission CVT ?', options: ['Moins chère', 'Variation continue = confort et économie', 'Plus légère', 'Pas d\'entretien'], correct: 1, explanation: 'CVT offre variation continue sans à-coups.' },
            { question: 'Cannelures arbre PDF 540 ?', options: ['4', '6', '12', '21'], correct: 1, explanation: '6 cannelures pour 540, 21 pour 1000 tr/min.' },
            { question: 'Qu\'est-ce que 540E ?', options: ['540 vitesse rapide', '540 à régime moteur réduit', '540 électrique', '540 économique à plein régime'], correct: 1, explanation: '540E donne 540 tr/min PDF à ~1500 tr/min moteur au lieu de 1900.' },
            { question: 'Intervalle vidange transmission ?', options: ['500 h', '1000 h', '2000 h', '5000 h'], correct: 2, explanation: 'Vidange transmission toutes les 2000 heures.' }
        ]
    },
    {
        id: 'tracteur-4', title: 'Électricité et Électronique', icon: '⚡', level: 'Intermédiaire', duration: '25 min',
        description: 'Circuit 12V, CAN Bus agricole et diagnostic tracteur.',
        image: '../images/tracteur-electrical.png',
        content: {
            intro: 'Les tracteurs modernes sont bardés d\'électronique. Maîtriser les bases du diagnostic est essentiel.',
            sections: [
                { title: '🔋 Circuit électrique', content: '<strong>Tension :</strong> 12V (petits) ou 24V (gros)\n<strong>Alternateur :</strong> 80-200A\n<strong>Batterie :</strong> 100-200 Ah\n<strong>Coupe-batterie :</strong> Obligatoire' },
                { title: '🖥️ Réseau CAN', content: '<strong>ISOBUS :</strong> ISO 11783, norme agricole\n<strong>Terminal universel :</strong> Pilotage outils\n<strong>GPS/Autoguidage :</strong> RTK centimétrique\n<strong>Section control :</strong> Coupure tronçons automatique' },
                { title: '📡 Capteurs', content: '<strong>Régime moteur :</strong> Capteur vilebrequin\n<strong>Vitesse :</strong> Roues et radar\n<strong>Niveau :</strong> Flotteur ou capacitif\n<strong>Position :</strong> Potentiomètre ou capteur angle' },
                { title: '🔧 Diagnostic', content: 'Valise constructeur obligatoire\nCodes défaut via écran tracteur\nMultimètre : tensions, résistances\nOscilloscope : signaux CAN' }
            ]
        },
        quiz: [
            { question: 'Norme bus tracteur/outil ?', options: ['J1939', 'OBD-II', 'ISOBUS ISO 11783', 'CAN Open'], correct: 2, explanation: 'ISOBUS (ISO 11783) norme agricole tracteur-outil.' },
            { question: 'Précision GPS RTK ?', options: ['5 mètres', '50 cm', '2-3 cm', '1 mm'], correct: 2, explanation: 'RTK offre une précision centimétrique (2-3 cm).' },
            { question: 'Tension gros tracteur ?', options: ['6V', '12V', '24V', '48V'], correct: 2, explanation: 'Les gros tracteurs utilisent du 24V.' },
            { question: 'Section control = ?', options: ['Contrôle moteur', 'Coupure tronçons automatique', 'Freinage ABS', 'Climatisation'], correct: 1, explanation: 'Coupure automatique des tronçons selon cartographie.' },
            { question: 'Capteur vitesse roue = ?', options: ['Radar', 'Inductif ou effet Hall', 'GPS seul', 'Accéléromètre'], correct: 1, explanation: 'Capteurs inductifs ou à effet Hall sur les moyeux.' }
        ]
    },
    {
        id: 'tracteur-5', title: 'Pneumatiques et Lestage', icon: '🔵', level: 'Débutant', duration: '20 min',
        description: 'Choix des pneus, pression selon usage et techniques de lestage.',
        image: '../images/tracteur-wheels.png',
        content: {
            intro: 'Les pneumatiques transmettent la puissance au sol. Leur choix et réglage sont cruciaux pour l\'efficacité et la préservation des sols.',
            sections: [
                { title: '🔵 Types de pneus', content: '<strong>Standard :</strong> Barrettes diagonales\n<strong>Radial :</strong> Plus de grip, moins de tassement\n<strong>Basse pression VF/IF :</strong> -40% pression, +20% charge\n<strong>Jumelage :</strong> Double roues pour répartition' },
                { title: '💨 Pression', content: '<strong>Route :</strong> 1.6-2.0 bars\n<strong>Champ :</strong> 0.6-1.2 bars (VF/IF = 0.4-0.8)\n<strong>Télégonflage :</strong> Ajustement en cabine\n<strong>Effet pression basse :</strong> empreinte x2, tassement /2' },
                { title: '⚖️ Lestage', content: '<strong>Masse avant :</strong> 500-2000 kg\n<strong>Masse roues :</strong> Fonte ou béton\n<strong>Lestage eau :</strong> 75% du pneu + antigel\n<strong>Rapport AV/AR :</strong> 35/65 à 40/60' },
                { title: '🔧 Entretien', content: 'Contrôle pression : hebdomadaire\nUsure : mini 10mm barrettes\nVoile jante : visuel\nSerrage écrous : 400-600 Nm\nÉquilibrage : conseillé route' }
            ]
        },
        quiz: [
            { question: 'Pression pneu au champ ?', options: ['0.6-1.2 bars', '2-3 bars', '4-5 bars', '6-8 bars'], correct: 0, explanation: 'Basse pression au champ pour réduire le tassement.' },
            { question: 'Avantage pneus VF ?', options: ['Moins chers', 'Charge +20% à pression -40%', 'Plus rapides', 'Pas d\'entretien'], correct: 1, explanation: 'VF (Very Flexion) permet plus de charge à basse pression.' },
            { question: 'Rapport lestage AV/AR ?', options: ['50/50', '35-40 / 60-65', '20/80', '70/30'], correct: 1, explanation: '35-40% avant, 60-65% arrière pour la traction.' },
            { question: 'Lestage eau = % du pneu ?', options: ['25%', '50%', '75%', '100%'], correct: 2, explanation: '75% du volume pour garder de l\'air pour les chocs.' },
            { question: 'Serrage écrous roue tracteur ?', options: ['100-150 Nm', '200-300 Nm', '400-600 Nm', '800-1000 Nm'], correct: 2, explanation: '400-600 Nm selon dimension des goujons.' }
        ]
    }
];

// ===== Rendu =====
document.addEventListener('DOMContentLoaded', function () {
    const g = document.querySelector('.lessons-grid'); if (!g) return;
    g.innerHTML = tracteurLessons.map((l, i) => `
        <article class="lesson-card"><div class="lesson-number">${String(i + 1).padStart(2, '0')}</div>
        <div class="lesson-content"><div class="lesson-header"><span class="lesson-icon">${l.icon}</span><div class="lesson-meta"><span class="lesson-level">${l.level}</span><span class="lesson-duration">⏱️ ${l.duration}</span></div></div>
        <h3 class="lesson-title">${l.title}</h3><p class="lesson-desc">${l.description}</p>
        <div class="lesson-tags"><span class="tag">📚 ${l.content.sections.length} sections</span><span class="tag">📝 ${l.quiz.length} questions</span></div></div>
        <div class="lesson-actions"><button class="btn-favorite" onclick="toggleFavorite('${l.id}','${l.title}','tracteur')"><span class="heart">🤍</span></button><button class="btn-start" onclick="openLesson('${l.id}')">Commencer →</button></div></article>
    `).join('');
});

function openLesson(id) {
    const l = tracteurLessons.find(x => x.id === id); if (!l) return;
    document.getElementById('lessonBody').innerHTML = `
        <div class="lesson-full">
            <div class="lesson-hero">
                <img src="${l.image}" alt="${l.title}" class="lesson-image" onerror="this.style.display='none'">
                <div class="lesson-hero-content">
                    <span class="lesson-badge">${l.level}</span>
                    <h2>${l.icon} ${l.title}</h2>
                    <p class="lesson-intro">${l.content.intro}</p>
                </div>
            </div>
            <div class="lesson-sections">
                ${l.content.sections.map(s => `
                    <div class="lesson-section">
                        <h3>${s.title}</h3>
                        <div class="section-content">${s.content.replace(/\n/g, '<br>')}</div>
                    </div>
                `).join('')}
            </div>
            <div class="lesson-quiz">
                <h3>📝 Quiz</h3>
                <div id="quizContainer"></div>
                <button class="btn btn-primary" onclick="startQuiz('${l.id}')">Commencer</button>
            </div>
        </div>`;
    document.getElementById('lessonModal').classList.add('active'); document.body.style.overflow = 'hidden';
}

let cQ, cI = 0, qS = 0;
function startQuiz(id) { cQ = tracteurLessons.find(x => x.id === id).quiz; cI = 0; qS = 0; showQ(); }
function showQ() { const q = cQ[cI]; document.getElementById('quizContainer').innerHTML = `<div class="quiz-question"><h4>Q${cI + 1}/${cQ.length}: ${q.question}</h4><div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option" onclick="selA(${i})">${String.fromCharCode(65 + i)}. ${o}</button>`).join('')}</div></div>`; document.querySelector('.lesson-quiz .btn-primary').style.display = 'none'; }
function selA(i) { const q = cQ[cI]; if (i === q.correct) qS++; document.querySelectorAll('.quiz-option').forEach((o, j) => { o.disabled = true; if (j === q.correct) o.classList.add('correct'); else if (j === i) o.classList.add('incorrect'); }); const d = document.createElement('div'); d.className = 'quiz-explanation'; d.innerHTML = `<p>${q.explanation}</p><button class="btn btn-primary" onclick="nxtQ()">Suivant</button>`; document.getElementById('quizContainer').appendChild(d); }
function nxtQ() { cI++; if (cI >= cQ.length) document.getElementById('quizContainer').innerHTML = `<div class="quiz-results"><h3>Score: ${qS}/${cQ.length}</h3><button class="btn btn-primary" onclick="closeLesson()">Terminer</button></div>`; else showQ(); }
function closeLesson() { document.getElementById('lessonModal').classList.remove('active'); document.body.style.overflow = ''; }
