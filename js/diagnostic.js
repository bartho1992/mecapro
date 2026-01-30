// ===== Diagnostic Logic =====

let currentVehicle = null;
let currentCategory = null;
let selectedSymptoms = [];
let currentMode = 'symptoms';

// Guided mode variables
let guidedVehicle = null;
let questionHistory = [];
let currentNode = null;

// ===== MODE SWITCHING =====
function switchMode(mode) {
    currentMode = mode;

    // Update tabs
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    // Show/hide sections
    document.getElementById('symptomsMode').classList.toggle('hidden', mode !== 'symptoms');
    document.getElementById('guidedMode').classList.toggle('hidden', mode !== 'guided');

    // Reset both modes
    if (mode === 'symptoms') {
        restartDiagnosis();
    } else {
        restartGuided();
    }
}

// ===== SYMPTOMS MODE =====

function selectVehicle(vehicleId) {
    currentVehicle = vehicleId;
    selectedSymptoms = [];

    // Update UI
    document.querySelectorAll('.vehicle-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.vehicle === vehicleId);
    });

    // Show categories
    const vehicle = diagnosticData[vehicleId];
    const categoriesHtml = vehicle.categories.map(cat => `
        <button class="category-btn" data-category="${cat.id}" onclick="selectCategory('${cat.id}')">
            <span class="category-icon">${cat.icon}</span>
            <span>${cat.name}</span>
        </button>
    `).join('');

    document.getElementById('symptomCategories').innerHTML = categoriesHtml;

    // Navigate to step 2
    showStep(2);
}

function selectCategory(categoryId) {
    currentCategory = categoryId;
    selectedSymptoms = [];

    // Update UI
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.category === categoryId);
    });

    // Show symptoms
    const vehicle = diagnosticData[currentVehicle];
    const symptoms = vehicle.symptoms[categoryId] || [];

    const symptomsHtml = symptoms.map(symptom => `
        <div class="symptom-item" data-symptom="${symptom.id}" onclick="toggleSymptom('${symptom.id}')">
            <div class="symptom-checkbox"></div>
            <span class="symptom-label">${symptom.text}</span>
        </div>
    `).join('');

    document.getElementById('symptomsList').innerHTML = symptomsHtml;

    // Navigate to step 3
    showStep(3);
}

function toggleSymptom(symptomId) {
    const index = selectedSymptoms.indexOf(symptomId);
    if (index > -1) {
        selectedSymptoms.splice(index, 1);
    } else {
        selectedSymptoms.push(symptomId);
    }

    // Update UI
    document.querySelectorAll('.symptom-item').forEach(item => {
        item.classList.toggle('checked', selectedSymptoms.includes(item.dataset.symptom));
    });
}

function runDiagnosis() {
    if (selectedSymptoms.length === 0) {
        showToast('Sélectionnez au moins un symptôme', 'warning');
        return;
    }

    const vehicle = diagnosticData[currentVehicle];
    const results = [];

    // Find diagnoses for selected symptoms
    selectedSymptoms.forEach(symptomId => {
        const diagnoses = vehicle.diagnoses[symptomId] || [];
        diagnoses.forEach(diagnosis => {
            // Check if already in results
            const existing = results.find(r => r.cause === diagnosis.cause);
            if (existing) {
                existing.matchCount++;
            } else {
                results.push({
                    ...diagnosis,
                    matchCount: 1
                });
            }
        });
    });

    // Sort by probability and match count
    results.sort((a, b) => {
        const probOrder = { high: 3, medium: 2, low: 1 };
        const probDiff = probOrder[b.probability] - probOrder[a.probability];
        if (probDiff !== 0) return probDiff;
        return b.matchCount - a.matchCount;
    });

    // Generate results HTML
    let resultsHtml = '';

    if (results.length === 0) {
        resultsHtml = `
            <div class="result-card">
                <div class="result-header">
                    <span class="result-title">🔍 Aucun diagnostic trouvé</span>
                </div>
                <p class="result-description">
                    Les symptômes sélectionnés ne correspondent pas à un diagnostic connu dans notre base.
                    Nous vous recommandons de consulter un mécanicien professionnel.
                </p>
                <div class="result-solutions">
                    <h4>💡 Recommandations</h4>
                    <ul>
                        <li>Consultez un professionnel pour un diagnostic complet</li>
                        <li>Essayez le diagnostic guidé pour plus de précision</li>
                        <li>Décrivez précisément les symptômes au mécanicien</li>
                    </ul>
                </div>
            </div>
        `;
    } else {
        resultsHtml = results.map((result, index) => `
            <div class="result-card ${result.probability}-probability">
                <div class="result-header">
                    <span class="result-title">${index === 0 ? '🎯' : '📋'} ${result.cause}</span>
                    <span class="result-probability">
                        ${result.probability === 'high' ? 'Très probable' : 'Probable'}
                    </span>
                </div>
                <p class="result-description">${result.description}</p>
                <div class="result-solutions">
                    <h4>🔧 Solutions recommandées</h4>
                    <ul>
                        ${result.solutions.map(sol => `<li>${sol}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('resultsContainer').innerHTML = resultsHtml;
    showStep('results');
}

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('#symptomsMode .diagnostic-step').forEach(s => {
        s.classList.add('hidden');
    });

    // Show target step
    const stepId = step === 'results' ? 'resultsStep' : `step${step}`;
    document.getElementById(stepId).classList.remove('hidden');
}

function goBack(toStep) {
    showStep(toStep);
}

function restartDiagnosis() {
    currentVehicle = null;
    currentCategory = null;
    selectedSymptoms = [];

    document.querySelectorAll('.vehicle-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    showStep(1);
}

// ===== GUIDED MODE =====

function startGuidedDiagnosis(vehicleId) {
    guidedVehicle = vehicleId;
    questionHistory = [];
    currentNode = 'start';

    // Update vehicle selection
    document.querySelectorAll('#guidedMode .vehicle-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.vehicle === vehicleId);
    });

    // Show questions
    document.getElementById('guidedStep1').classList.add('hidden');
    document.getElementById('guidedQuestions').classList.remove('hidden');

    showQuestion();
}

function showQuestion() {
    const tree = diagnosticData[guidedVehicle].guidedTree;
    const node = tree[currentNode];

    if (!node) {
        console.error('Node not found:', currentNode);
        return;
    }

    // Check if it's a result
    if (node.result) {
        showGuidedResult(node);
        return;
    }

    // Update progress
    const progress = Math.min((questionHistory.length + 1) * 20, 100);
    document.getElementById('questionProgress').style.width = `${progress}%`;

    // Show question
    document.getElementById('currentQuestion').textContent = node.question;

    // Show options
    const optionsHtml = node.options.map(opt => `
        <button class="option-btn" onclick="answerQuestion('${opt.next}')">
            ${opt.text}
        </button>
    `).join('');

    document.getElementById('questionOptions').innerHTML = optionsHtml;
}

function answerQuestion(nextNode) {
    questionHistory.push(currentNode);
    currentNode = nextNode;
    showQuestion();
}

function previousQuestion() {
    if (questionHistory.length === 0) {
        // Go back to vehicle selection
        document.getElementById('guidedQuestions').classList.add('hidden');
        document.getElementById('guidedStep1').classList.remove('hidden');

        document.querySelectorAll('#guidedMode .vehicle-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        return;
    }

    currentNode = questionHistory.pop();
    showQuestion();
}

function showGuidedResult(result) {
    document.getElementById('guidedQuestions').classList.add('hidden');
    document.getElementById('guidedResult').classList.remove('hidden');

    const resultHtml = `
        <div class="result-icon">${result.icon}</div>
        <h3 class="result-title">${result.title}</h3>
        <p class="result-description">${result.description}</p>
        <div class="solutions-list">
            <h4>🔧 Solutions recommandées</h4>
            <ul>
                ${result.solutions.map(sol => `<li>${sol}</li>`).join('')}
            </ul>
        </div>
    `;

    document.getElementById('guidedResultContent').innerHTML = resultHtml;
}

function restartGuided() {
    guidedVehicle = null;
    questionHistory = [];
    currentNode = null;

    document.getElementById('guidedQuestions').classList.add('hidden');
    document.getElementById('guidedResult').classList.add('hidden');
    document.getElementById('guidedStep1').classList.remove('hidden');

    document.querySelectorAll('#guidedMode .vehicle-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast styles dynamically
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--bg-card);
        border: 2px solid var(--border-color);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
    }
    .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    .toast-warning {
        border-color: var(--accent-yellow);
    }
`;
document.head.appendChild(toastStyles);
