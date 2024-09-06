let page = 1;
let isLoading = false;

function loadPortfolioItems() {
    if (isLoading) return;

    isLoading = true;
    
    setTimeout(() => {
        const content = document.getElementById('content');

        for (let i = 0; i < 5; i++) {
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            item.innerHTML = `
                <h2>Project ${page * 5 + i}</h2>
                <p>Description of project ${page * 5 + i} goes here.</p>
            `;
            content.appendChild(item);
        }

        page++;
        isLoading = false;
    }, 1000);
}

function onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadPortfolioItems();
    }
}

window.addEventListener('scroll', onScroll);

// Load the first set of items
loadPortfolioItems();

const facts = [
    "I once tried coding on my phone... didn't go well.",
    "I can write clean code but can't keep my desk clean!",
    "Coffee is my secret coding fuel.",
    "I once debugged for 4 hours only to realize it was a typo.",
];

let factIndex = 0;
setInterval(() => {
    factIndex = (factIndex + 1) % facts.length;
    document.getElementById('fun-facts').innerHTML = `<p>${facts[factIndex]}</p>`;
}, 3000);

function revealAnswer() {
    const answers = [
        "You're a code ninja—silent but deadly!",
        "You're a bug whisperer—calm in the face of chaos!",
        "You're a caffeine-powered coding machine!",
    ];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('quiz-result').textContent = randomAnswer;
}