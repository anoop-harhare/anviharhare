// Simple Memory/Match Game

const content = [
    { name: 'Cat 1', image: 'cat1.jpg' },
    { name: 'Cat 2', image: 'cat2.jpg' },
    { name: 'Pokémon 1', image: 'pikachu.jpg' },
    { name: 'Pokémon 2', image: 'bulbasaur.jpg' },
    { name: 'Cinnamon Roll 1', image: 'cinnamon_roll1.jpg' },
    { name: 'Cinnamon Roll 2', image: 'cinnamon_roll2.jpg' }
];

let board = [];
let selectedCards = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setupBoard() {
    board = [...content, ...content]; // Duplicate for matching
    shuffle(board);
    // Logic to render board...
}

function selectCard(card) {
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [first, second] = selectedCards;
    if (first.name === second.name) {
        // It's a match
        selectedCards = [];
    } else {
        // Not a match
        setTimeout(() => {
            // Hide cards again
            selectedCards = [];
        }, 1000);
    }
}

setupBoard();