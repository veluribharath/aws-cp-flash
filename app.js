// State management
let currentCardIndex = 0;
let flashcards = [...flashcardsData];
let studiedCards = new Set();
let currentCategory = 'all';

// DOM elements
const flashcard = document.getElementById('flashcard');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const categoryEl = document.getElementById('cardCategory');
const categoryBackEl = document.getElementById('cardCategoryBack');
const progressEl = document.getElementById('progress');
const studiedEl = document.getElementById('studied');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const categoryFilter = document.getElementById('categoryFilter');

// Initialize app
function init() {
    updateCard();
    updateStats();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    flashcard.addEventListener('click', flipCard);
    prevBtn.addEventListener('click', showPreviousCard);
    nextBtn.addEventListener('click', showNextCard);
    shuffleBtn.addEventListener('click', shuffleCards);
    categoryFilter.addEventListener('change', filterByCategory);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') showPreviousCard();
        if (e.key === 'ArrowRight') showNextCard();
        if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
        if (e.key === 's' || e.key === 'S') shuffleCards();
    });
}

// Flip card
function flipCard() {
    flashcard.classList.toggle('flipped');
    studiedCards.add(currentCardIndex);
    updateStats();
}

// Update card display
function updateCard() {
    const card = flashcards[currentCardIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    categoryEl.textContent = card.categoryName;
    categoryBackEl.textContent = card.categoryName;

    // Remove flipped class when changing cards
    flashcard.classList.remove('flipped');
}

// Update statistics
function updateStats() {
    progressEl.textContent = `${currentCardIndex + 1}/${flashcards.length}`;
    studiedEl.textContent = studiedCards.size;
}

// Show previous card
function showPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
        updateStats();
    }
}

// Show next card
function showNextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        updateCard();
        updateStats();
    }
}

// Shuffle cards
function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }

    currentCardIndex = 0;
    studiedCards.clear();
    updateCard();
    updateStats();

    // Visual feedback
    shuffleBtn.textContent = 'Shuffled!';
    setTimeout(() => {
        shuffleBtn.textContent = 'Shuffle';
    }, 1000);
}

// Filter cards by category
function filterByCategory() {
    currentCategory = categoryFilter.value;

    if (currentCategory === 'all') {
        flashcards = [...flashcardsData];
    } else {
        flashcards = flashcardsData.filter(card => card.category === currentCategory);
    }

    currentCardIndex = 0;
    studiedCards.clear();
    updateCard();
    updateStats();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
