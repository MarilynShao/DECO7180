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
