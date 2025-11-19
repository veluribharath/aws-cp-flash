// Exam State Management
let examState = {
    mode: 'timed', // 'timed' or 'practice'
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: {}, // questionId: [selectedAnswers]
    flaggedQuestions: new Set(),
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeRemaining: 90 * 60, // 90 minutes in seconds
};

// Initialize exam
function startExam(mode) {
    examState.mode = mode;
    examState.questions = shuffleArray([...examQuestions]);
    examState.currentQuestionIndex = 0;
    examState.userAnswers = {};
    examState.flaggedQuestions = new Set();
    examState.startTime = new Date();
    examState.timeRemaining = 90 * 60;

    // Hide mode selection, show exam screen
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');

    // Initialize UI
    initializeNavigator();
    loadQuestion();

    // Start timer for timed mode
    if (mode === 'timed') {
        startTimer();
    } else {
        document.getElementById('timer').style.display = 'none';
    }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Timer functions
function startTimer() {
    examState.timerInterval = setInterval(() => {
        examState.timeRemaining--;
        updateTimerDisplay();

        if (examState.timeRemaining <= 0) {
            clearInterval(examState.timerInterval);
            autoSubmitExam();
        } else if (examState.timeRemaining === 300) { // 5 minutes warning
            showTimeWarning();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(examState.timeRemaining / 60);
    const seconds = examState.timeRemaining % 60;
    const timerValue = document.getElementById('timerValue');
    timerValue.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Add warning class when time is low
    if (examState.timeRemaining <= 300) {
        timerValue.classList.add('timer-warning');
    }
}

function showTimeWarning() {
    const timerValue = document.getElementById('timerValue');
    timerValue.classList.add('timer-critical');
}

// Initialize question navigator
function initializeNavigator() {
    const grid = document.getElementById('navigatorGrid');
    grid.innerHTML = '';

    examState.questions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-question-btn unanswered';
        btn.textContent = index + 1;
        btn.onclick = () => navigateToQuestion(index);
        grid.appendChild(btn);
    });

    updateNavigatorStats();
}

// Load and display question
function loadQuestion() {
    const question = examState.questions[examState.currentQuestionIndex];
    const questionId = question.id;

    // Update question header
    document.getElementById('currentQuestion').textContent = examState.currentQuestionIndex + 1;
    document.getElementById('questionCategory').textContent = question.categoryName;
    document.getElementById('questionText').textContent = question.question;

    // Update question type indicator
    const typeIndicator = document.getElementById('questionTypeIndicator');
    if (question.type === 'multiple-response') {
        typeIndicator.textContent = 'Select TWO answers';
    } else {
        typeIndicator.textContent = 'Select ONE answer';
    }

    // Load options
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const inputType = question.type === 'multiple-response' ? 'checkbox' : 'radio';
        const inputId = `option-${index}`;

        const input = document.createElement('input');
        input.type = inputType;
        input.id = inputId;
        input.name = 'question-option';
        input.value = index;

        // Check if this option was previously selected
        const userAnswer = examState.userAnswers[questionId] || [];
        if (userAnswer.includes(index)) {
            input.checked = true;
        }

        input.onchange = () => handleAnswerSelection(index, question.type);

        const label = document.createElement('label');
        label.htmlFor = inputId;
        label.textContent = option;

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        container.appendChild(optionDiv);
    });

    // Update flag button
    updateFlagButton();

    // Update navigation buttons
    updateNavigationButtons();

    // Update navigator highlighting
    updateNavigatorHighlight();

    // Hide feedback in practice mode initially
    document.getElementById('answerFeedback').classList.add('hidden');
}

// Handle answer selection
function handleAnswerSelection(optionIndex, questionType) {
    const questionId = examState.questions[examState.currentQuestionIndex].id;

    if (questionType === 'single-choice') {
        examState.userAnswers[questionId] = [optionIndex];
    } else {
        // Multiple response
        let currentAnswers = examState.userAnswers[questionId] || [];

        if (currentAnswers.includes(optionIndex)) {
            currentAnswers = currentAnswers.filter(i => i !== optionIndex);
        } else {
            currentAnswers.push(optionIndex);
        }

        examState.userAnswers[questionId] = currentAnswers;
    }

    updateNavigatorStats();
    updateNavigatorButton(examState.currentQuestionIndex);

    // Show feedback in practice mode
    if (examState.mode === 'practice') {
        showPracticeFeedback();
    }
}

// Show feedback in practice mode
function showPracticeFeedback() {
    const question = examState.questions[examState.currentQuestionIndex];
    const userAnswer = examState.userAnswers[question.id] || [];
    const correctAnswers = question.correctAnswers;

    if (userAnswer.length === 0) {
        document.getElementById('answerFeedback').classList.add('hidden');
        return;
    }

    const isCorrect = arraysEqual(userAnswer.sort(), correctAnswers.sort());
    const feedback = document.getElementById('answerFeedback');
    const icon = document.getElementById('feedbackIcon');
    const message = document.getElementById('feedbackMessage');
    const explanation = document.getElementById('feedbackExplanation');

    feedback.classList.remove('hidden');

    if (isCorrect) {
        feedback.className = 'answer-feedback correct';
        icon.textContent = '✓';
        message.textContent = 'Correct!';
    } else {
        feedback.className = 'answer-feedback incorrect';
        icon.textContent = '✗';
        message.textContent = 'Incorrect';

        // Show correct answers
        const correctOptions = correctAnswers.map(i => question.options[i]).join(', ');
        message.textContent += ` - Correct answer(s): ${correctOptions}`;
    }

    explanation.textContent = question.explanation;
}

// Arrays equal comparison
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

// Navigation functions
function previousQuestion() {
    if (examState.currentQuestionIndex > 0) {
        examState.currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (examState.currentQuestionIndex < examState.questions.length - 1) {
        examState.currentQuestionIndex++;
        loadQuestion();
    }
}

function navigateToQuestion(index) {
    examState.currentQuestionIndex = index;
    loadQuestion();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevQuestionBtn');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const submitBtn = document.getElementById('submitExamBtn');

    prevBtn.disabled = examState.currentQuestionIndex === 0;

    if (examState.currentQuestionIndex === examState.questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// Flag functions
function toggleFlag() {
    const questionId = examState.questions[examState.currentQuestionIndex].id;

    if (examState.flaggedQuestions.has(questionId)) {
        examState.flaggedQuestions.delete(questionId);
    } else {
        examState.flaggedQuestions.add(questionId);
    }

    updateFlagButton();
    updateNavigatorButton(examState.currentQuestionIndex);
    updateNavigatorStats();
}

function updateFlagButton() {
    const questionId = examState.questions[examState.currentQuestionIndex].id;
    const flagBtn = document.getElementById('flagBtn');

    if (examState.flaggedQuestions.has(questionId)) {
        flagBtn.classList.add('flagged');
    } else {
        flagBtn.classList.remove('flagged');
    }
}

// Clear answer
function clearAnswer() {
    const questionId = examState.questions[examState.currentQuestionIndex].id;
    delete examState.userAnswers[questionId];

    // Uncheck all inputs
    const inputs = document.querySelectorAll('#optionsContainer input');
    inputs.forEach(input => input.checked = false);

    updateNavigatorStats();
    updateNavigatorButton(examState.currentQuestionIndex);
    document.getElementById('answerFeedback').classList.add('hidden');
}

// Update navigator stats
function updateNavigatorStats() {
    const answeredCount = Object.keys(examState.userAnswers).length;
    const flaggedCount = examState.flaggedQuestions.size;
    const unansweredCount = examState.questions.length - answeredCount;

    document.getElementById('answeredCount').textContent = answeredCount;
    document.getElementById('flaggedCount').textContent = flaggedCount;
    document.getElementById('unansweredCount').textContent = unansweredCount;
}

// Update navigator button status
function updateNavigatorButton(index) {
    const question = examState.questions[index];
    const btn = document.querySelectorAll('.nav-question-btn')[index];
    const isAnswered = examState.userAnswers[question.id] !== undefined;
    const isFlagged = examState.flaggedQuestions.has(question.id);

    btn.className = 'nav-question-btn';

    if (isAnswered) {
        btn.classList.add('answered');
    } else {
        btn.classList.add('unanswered');
    }

    if (isFlagged) {
        btn.classList.add('flagged');
    }
}

// Update navigator highlight
function updateNavigatorHighlight() {
    const btns = document.querySelectorAll('.nav-question-btn');
    btns.forEach((btn, index) => {
        if (index === examState.currentQuestionIndex) {
            btn.classList.add('current');
        } else {
            btn.classList.remove('current');
        }
    });
}

// Submit exam
function confirmSubmit() {
    const answeredCount = Object.keys(examState.userAnswers).length;
    const unansweredCount = examState.questions.length - answeredCount;

    const modal = document.getElementById('confirmModal');
    const warning = document.getElementById('modalWarning');

    if (unansweredCount > 0) {
        warning.textContent = `You have ${unansweredCount} unanswered question${unansweredCount > 1 ? 's' : ''}. Do you want to continue?`;
    } else {
        warning.textContent = 'You have answered all questions.';
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('confirmModal').classList.add('hidden');
}

function autoSubmitExam() {
    submitExam();
}

function submitExam() {
    examState.endTime = new Date();

    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
    }

    closeModal();

    // Calculate results
    calculateResults();

    // Hide exam screen, show results
    document.getElementById('examScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
}

// Calculate results
function calculateResults() {
    let correctCount = 0;
    const domainScores = {
        'cloud-concepts': { correct: 0, total: 0 },
        'security': { correct: 0, total: 0 },
        'technology': { correct: 0, total: 0 },
        'billing': { correct: 0, total: 0 }
    };

    examState.questions.forEach(question => {
        const userAnswer = examState.userAnswers[question.id] || [];
        const correctAnswers = question.correctAnswers;
        const isCorrect = arraysEqual(userAnswer.sort(), correctAnswers.sort());

        if (isCorrect) {
            correctCount++;
            domainScores[question.category].correct++;
        }
        domainScores[question.category].total++;
    });

    // Calculate score (AWS uses 100-1000 scale, 700 to pass)
    const percentage = (correctCount / examState.questions.length) * 100;
    const scaledScore = Math.round(100 + (percentage / 100) * 900);
    const isPassing = scaledScore >= 700;

    // Calculate time taken
    const timeTaken = Math.floor((examState.endTime - examState.startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    // Update UI
    document.getElementById('scoreValue').textContent = scaledScore;
    document.getElementById('correctCount').textContent = `${correctCount} / 65`;
    document.getElementById('percentageScore').textContent = `${percentage.toFixed(1)}%`;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update pass/fail status
    const statusBadge = document.getElementById('statusBadge');
    const statusMessage = document.getElementById('statusMessage');

    if (isPassing) {
        statusBadge.textContent = 'PASS';
        statusBadge.className = 'status-badge pass';
        statusMessage.textContent = 'Congratulations! You passed!';
    } else {
        statusBadge.textContent = 'FAIL';
        statusBadge.className = 'status-badge fail';
        statusMessage.textContent = 'Keep studying and try again!';
    }

    // Update score circle
    const scoreFill = document.getElementById('scoreFill');
    const dashOffset = 565.48 - (565.48 * percentage / 100);
    scoreFill.style.strokeDashoffset = dashOffset;

    if (isPassing) {
        scoreFill.style.stroke = '#10b981';
    } else {
        scoreFill.style.stroke = '#ef4444';
    }

    // Update domain scores
    updateDomainScore(1, domainScores['cloud-concepts']);
    updateDomainScore(2, domainScores['security']);
    updateDomainScore(3, domainScores['technology']);
    updateDomainScore(4, domainScores['billing']);
}

function updateDomainScore(domainNum, scores) {
    const percentage = scores.total > 0 ? (scores.correct / scores.total) * 100 : 0;
    const bar = document.getElementById(`domainBar${domainNum}`);
    const scoreText = document.getElementById(`domainScore${domainNum}`);

    bar.style.width = `${percentage}%`;
    scoreText.textContent = `${percentage.toFixed(0)}% (${scores.correct}/${scores.total})`;

    // Color based on performance
    if (percentage >= 70) {
        bar.style.backgroundColor = '#10b981';
    } else if (percentage >= 50) {
        bar.style.backgroundColor = '#f59e0b';
    } else {
        bar.style.backgroundColor = '#ef4444';
    }
}

// Review answers
function reviewAnswers() {
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');

    // Go to first question
    examState.currentQuestionIndex = 0;
    loadQuestion();

    // Enable all answers for review
    examState.mode = 'practice';

    // Hide timer
    document.getElementById('timer').style.display = 'none';
}

// Retake exam
function retakeExam() {
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('modeSelection').classList.remove('hidden');

    // Reset state
    examState = {
        mode: 'timed',
        questions: [],
        currentQuestionIndex: 0,
        userAnswers: {},
        flaggedQuestions: new Set(),
        startTime: null,
        endTime: null,
        timerInterval: null,
        timeRemaining: 90 * 60,
    };
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Only in exam screen
    if (!document.getElementById('examScreen').classList.contains('hidden')) {
        if (e.key === 'ArrowLeft' && examState.currentQuestionIndex > 0) {
            previousQuestion();
        } else if (e.key === 'ArrowRight' && examState.currentQuestionIndex < examState.questions.length - 1) {
            nextQuestion();
        } else if (e.key === 'f' || e.key === 'F') {
            toggleFlag();
        }
    }
});
