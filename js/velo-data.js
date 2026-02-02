// ===== Module Vélo - Version Professionnelle =====
const veloLessons = [
    {
        id: 'velo-1', title: 'Le Dérailleur et la Transmission', icon: '⚙️', level: 'Débutant', duration: '20 min',
        description: 'Comprenez le fonctionnement du dérailleur et apprenez à le régler.',
        image: '../images/velo-derailleur.png',
        content: {
            intro: 'La transmission transforme votre énergie en mouvement. Un dérailleur bien réglé offre des passages fluides.',
            sections: [
                { title: '⚙️ Composants', content: '<strong>Dérailleur arrière :</strong> Chape, galets, parallélogramme, butées H/L\n<strong>Cassette :</strong> 8-12 pignons\n<strong>Chaîne :</strong> Durée vie 3000-5000 km' },
                { title: '🔧 Réglage', content: '<strong>Butée H :</strong> Chaîne sur petit pignon, galet aligné\n<strong>Butée L :</strong> Chaîne sur grand pignon\n<strong>Tension câble :</strong> Molette au levier\n<strong>Vis B :</strong> Gap 5-6mm' },
                { title: '⛓️ Entretien', content: 'Nettoyage : dégraissant, brosser, lubrifier\nUsure : 0.5% (11-12v), 0.75% (8-10v)\nFréquence : lubrifier tous les 200-300 km' },
                { title: '⚠️ Problèmes', content: 'Chaîne saute → câble détendu ou usée\nBruit → chaîne sèche ou galet usé\nChangements difficiles → câble grippé ou patte faussée' }
            ]
        },
        quiz: [
            { question: 'Rôle de la vis H ?', options: ['Tendre câble', 'Limiter vers petit pignon', 'Régler hauteur', 'Tension chaîne'], correct: 1, explanation: 'La vis H limite le déplacement vers l\'extérieur.' },
            { question: 'Usure chaîne 12v à remplacer ?', options: ['0.25%', '0.5%', '0.75%', '1%'], correct: 1, explanation: 'Chaînes 11-12v plus étroites = 0.5% max.' },
            { question: 'Gap galet/pignon ?', options: ['1-2mm', '5-6mm', '10-12mm', '15-20mm'], correct: 1, explanation: 'Le gap de 5-6mm assure des changements fluides.' },
            { question: 'Patte faussée = ?', options: ['Vélo bloqué', 'Vitesses mal réglées', 'Chaîne casse', 'Freins HS'], correct: 1, explanation: 'Une patte faussée empêche l\'alignement correct.' },
            { question: 'Lubrifier chaîne tous les ?', options: ['50 km', '200-300 km', '1000 km', '1 an'], correct: 1, explanation: 'Tous les 200-300 km ou après la pluie.' }
        ]
    },
    {
        id: 'velo-2', title: 'Freins à Disque et V-Brake', icon: '🛑', level: 'Intermédiaire', duration: '25 min',
        description: 'Entretenir et régler les systèmes de freinage vélo.',
        image: '../images/velo-brakes.png',
        content: {
            intro: 'Le freinage est crucial pour la sécurité. Disques hydrauliques ou V-Brake, un bon réglage garantit puissance et modulation.',
            sections: [
                { title: '💧 Disque hydraulique', content: 'Composants : levier, durite, étrier, disque, plaquettes\nLiquide : DOT (certains) ou huile minérale (Shimano)\n⚠️ Ne pas mélanger les types !' },
                { title: '🔧 Centrage', content: '1. Desserrer vis étrier\n2. Actionner et maintenir levier\n3. Serrer vis en maintenant\n4. Relâcher et tester' },
                { title: '✋ V-Brake', content: 'Réglage patins : centre de piste, toe-in, 1-2mm de distance\nTypes patins : caoutchouc, dual compound, céramique\nUsure : rainures effacées = remplacer' },
                { title: '⚠️ Diagnostic', content: 'Bruit aigu → plaquettes vitrifiées, nettoyer alcool\nLevier spongieux → purge nécessaire\nFreinage faible → patins usés ou câble détendu' }
            ]
        },
        quiz: [
            { question: 'Liquide Shimano moderne ?', options: ['DOT 4', 'DOT 5.1', 'Huile minérale', 'LDR'], correct: 2, explanation: 'Shimano utilise l\'huile minérale.' },
            { question: 'Centrer étrier disque ?', options: ['Taper', 'Desserrer + levier + resserrer', 'Écarter plaquettes', 'Chauffer'], correct: 1, explanation: 'Desserrer, serrer levier, resserrer.' },
            { question: 'Toe-in signifie ?', options: ['Parallèle', 'Avant touche d\'abord', 'Incliné bas', 'Très écarté'], correct: 1, explanation: 'L\'avant du patin touche en premier.' },
            { question: 'Nettoyer disque contaminé ?', options: ['WD-40', 'Alcool isopropylique', 'Eau savonneuse', 'Impossible'], correct: 1, explanation: 'L\'alcool dégraisse sans résidu.' },
            { question: 'Levier sans roue = ?', options: ['OK', 'Pistons sortent et touchent', 'Liquide s\'évapore', 'Rien'], correct: 1, explanation: 'Les pistons sortent trop et se touchent.' }
        ]
    },
    {
        id: 'velo-3', title: 'Roues et Pneumatiques', icon: '🔵', level: 'Débutant', duration: '20 min',
        description: 'Changement de chambre, dévoilage et pression optimale.',
        image: '../images/velo-wheels.png',
        content: {
            intro: 'Les roues sont le lien avec le sol. Savoir réparer une crevaison vous rend autonome.',
            sections: [
                { title: '🔵 Structure', content: 'Moyeu : axe, roulements, corps de cassette\nRayons : 24-36, croisement 2X/3X\nJante : alu ou carbone, largeur 17-30mm' },
                { title: '🛠️ Crevaison', content: 'Démontage : dégonfler, décoller flancs, démonte-pneu\nTrouver trou : gonfler, écouter ou eau\nRéparer : poncer, colle, rustine, appuyer' },
                { title: '📐 Dévoilage', content: 'Voile latéral : tendre rayon opposé au voile\nProcédure : 1/4 tour, vérifier, répéter\nSaut : ajuster tension globale zone' },
                { title: '💨 Pression', content: 'Route : 6-8 bars / Gravel : 3-4 bars\nVTT : 1.5-2.5 bars / Urbain : 4-5 bars\nValves : Presta (route), Schrader (VTT)' }
            ]
        },
        quiz: [
            { question: 'Rayons roue route ?', options: ['12-16', '20-24', '28-32', '40-48'], correct: 2, explanation: '28-32 rayons classique, 20-24 aéro.' },
            { question: 'Pression VTT 29x2.4 ?', options: ['1.5-2.5 bars', '4-5 bars', '6-8 bars', '10-12 bars'], correct: 0, explanation: 'Basse pression pour grip et confort.' },
            { question: 'Voile gauche = ?', options: ['Tendre gauche', 'Tendre droite', 'Tout détendre', 'Remplacer'], correct: 1, explanation: 'Tendre côté opposé au voile.' },
            { question: 'Pas de démonte-pneu au remontage ?', options: ['Interdit', 'Risque pincer chambre', 'Use pneu', 'Déforme jante'], correct: 1, explanation: 'Risque de pincer la chambre.' },
            { question: 'Valve Presta = ?', options: ['Route, fine', 'VTT, grosse', 'Ville, ancienne', 'Toutes'], correct: 0, explanation: 'Presta = fine, vélo route.' }
        ]
    },
    {
        id: 'velo-4', title: 'Pédalier et Boîtier', icon: '🔄', level: 'Intermédiaire', duration: '25 min',
        description: 'Standards de boîtiers et entretien.',
        image: '../images/velo-crankset.png',
        content: {
            intro: 'Le pédalier est le point de transfert de puissance. Comprendre les standards est essentiel.',
            sections: [
                { title: '⚙️ Types', content: 'BSA (fileté) : 68/73mm, le plus répandu\nPress-fit : BB86, BB92, PF30, bruits fréquents\nIntégré : roulements externes, léger' },
                { title: '🔧 Démontage', content: 'Hollowtech II : dévisser 2 vis, retirer cache, frapper axe, tirer droite\nRemontage : graisser, engager droite, serrer 12-15 Nm' },
                { title: '⚠️ Bruits', content: 'Craquement → vérifier serrage pédales (35 Nm), manivelles, graisse\nClaquement → jeu roulements, cuvettes press-fit\nSolutions : pâte Loctite 609, kits BSA' },
                { title: '🔩 Pédales', content: 'Filetage : droite normal, gauche inversé\nToujours graisser le filetage\nSerrer à 35 Nm' }
            ]
        },
        quiz: [
            { question: 'Standard le plus répandu ?', options: ['BB30', 'Press-fit', 'BSA', 'PF30'], correct: 2, explanation: 'BSA fileté reste le plus courant.' },
            { question: 'Pédale gauche inversée ?', options: ['Erreur', 'Évite desserrage', 'Plus légère', 'Gauchers'], correct: 1, explanation: 'Le mouvement renforce le serrage.' },
            { question: 'Couple serrage pédale ?', options: ['5-10 Nm', '20-25 Nm', '35 Nm', '50 Nm'], correct: 2, explanation: '35 Nm avec graisse sur filetage.' },
            { question: 'Résoudre craquement press-fit ?', options: ['Remplacer', 'Pâte Loctite', 'Rouler plus', 'Ignorer'], correct: 1, explanation: 'Loctite 609 ou conversion BSA.' },
            { question: 'Largeur BSA route ?', options: ['54mm', '68mm', '86mm', '100mm'], correct: 1, explanation: '68mm route, 73mm VTT.' }
        ]
    },
    {
        id: 'velo-5', title: 'Direction et Jeu de Direction', icon: '🎯', level: 'Intermédiaire', duration: '20 min',
        description: 'Régler le jeu de direction et entretenir les roulements.',
        image: '../images/velo-steering.png',
        content: {
            intro: 'Le jeu de direction permet à la fourche de tourner. Un réglage précis assure fluidité et sécurité.',
            sections: [
                { title: '⚙️ Structure', content: 'Composants : cuvettes, roulements, pivot, potence\nTypes : fileté, Ahead, intégré, semi-intégré\nStandards : 1"1/8, 1.5", tapered' },
                { title: '🔧 Réglage Ahead', content: '1. Desserrer vis latérales\n2. Serrer vis supérieure (2-3 Nm max)\n3. Aligner potence/roue\n4. Serrer latérales (5-6 Nm)' },
                { title: '🛠️ Remplacement', content: 'Symptômes : crantage, points durs, bruit\nExtraction : outil ou tube + marteau\nInstallation : graisser, presser perpendiculaire' },
                { title: '⚠️ Problèmes', content: 'Cogne → desserré ou roulement HS\nDure → trop serrée ou roulement sec\nBruit freinage → jeu à resserrer' }
            ]
        },
        quiz: [
            { question: 'Rôle vis supérieure Ahead ?', options: ['Serrer potence', 'Précharger roulements', 'Régler hauteur', 'Bloquer fourche'], correct: 1, explanation: 'Précharge avant serrage latéral.' },
            { question: 'Vérifier jeu direction ?', options: ['Tourner vite', 'Freiner + balancer', 'Soulever par guidon', 'Écouter'], correct: 1, explanation: 'Freiner et basculer détecte le jeu.' },
            { question: 'Tapered = ?', options: ['Fileté', 'Conique 2 diamètres', 'Très serré', 'Sans roulements'], correct: 1, explanation: '1"1/8 haut, 1.5" bas pour rigidité.' },
            { question: 'Direction crante = ?', options: ['Parfait', 'Roulements usés', 'Manque graisse', 'Pivot long'], correct: 1, explanation: 'Billes ont marqué les pistes.' },
            { question: 'Couple précharge potence ?', options: ['0.5-1 Nm', '2-3 Nm', '8-10 Nm', '15-20 Nm'], correct: 1, explanation: '2-3 Nm juste pour supprimer le jeu.' }
        ]
    }
];

// ===== Rendu =====
document.addEventListener('DOMContentLoaded', function () {
    const g = document.querySelector('.lessons-grid');
    if (!g) return;
    g.innerHTML = veloLessons.map((l, i) => `
        <article class="lesson-card"><div class="lesson-number">${String(i + 1).padStart(2, '0')}</div>
        <div class="lesson-content"><div class="lesson-header"><span class="lesson-icon">${l.icon}</span><div class="lesson-meta"><span class="lesson-level">${l.level}</span><span class="lesson-duration">⏱️ ${l.duration}</span></div></div>
        <h3 class="lesson-title">${l.title}</h3><p class="lesson-desc">${l.description}</p>
        <div class="lesson-tags"><span class="tag">📚 ${l.content.sections.length} sections</span><span class="tag">📝 ${l.quiz.length} questions</span></div></div>
        <div class="lesson-actions"><button class="btn-favorite" onclick="toggleFavorite('${l.id}','${l.title}','velo')"><span class="heart">🤍</span></button><button class="btn-start" onclick="openLesson('${l.id}')">Commencer →</button></div></article>
    `).join('');
});

function openLesson(id) {
    const l = veloLessons.find(x => x.id === id); if (!l) return;
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
function startQuiz(id) { cQ = veloLessons.find(x => x.id === id).quiz; cI = 0; qS = 0; showQ(); }
function showQ() { const q = cQ[cI]; document.getElementById('quizContainer').innerHTML = `<div class="quiz-question"><h4>Q${cI + 1}/${cQ.length}: ${q.question}</h4><div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option" onclick="selA(${i})">${String.fromCharCode(65 + i)}. ${o}</button>`).join('')}</div></div>`; document.querySelector('.lesson-quiz .btn-primary').style.display = 'none'; }
function selA(i) { const q = cQ[cI]; if (i === q.correct) qS++; document.querySelectorAll('.quiz-option').forEach((o, j) => { o.disabled = true; if (j === q.correct) o.classList.add('correct'); else if (j === i) o.classList.add('incorrect'); }); const d = document.createElement('div'); d.className = 'quiz-explanation'; d.innerHTML = `<p>${q.explanation}</p><button class="btn btn-primary" onclick="nxtQ()">Suivant</button>`; document.getElementById('quizContainer').appendChild(d); }
function nxtQ() { cI++; if (cI >= cQ.length) document.getElementById('quizContainer').innerHTML = `<div class="quiz-results"><h3>Score: ${qS}/${cQ.length}</h3><button class="btn btn-primary" onclick="closeLesson()">Terminer</button></div>`; else showQ(); }
function closeLesson() { document.getElementById('lessonModal').classList.remove('active'); document.body.style.overflow = ''; }
