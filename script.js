// Project modal handling
const projectItems = document.querySelectorAll('.project-item');
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');  // If you need to add images
const closeProjectModal = document.querySelector('.close-project-modal');

// Event listener for each project item to open modal
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get title, description, and images from data attributes
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');
        const images = item.getAttribute('data-images').split(',');  // Split image list if needed

        // Set modal content
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // Clear previous images
        modalImages.innerHTML = '';

        // Add images if available
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.style.maxWidth = '100%';
            imgElement.style.borderRadius = '8px';
            modalImages.appendChild(imgElement);
        });

        // Show the project modal
        projectModal.style.display = 'flex';
    });
});

// Close modal when the close button is clicked
closeProjectModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

// Close modal when clicking outside of the modal
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// Reflection modal handling
const milestones = document.querySelectorAll('.timeline-milestone');
const reflectionModal = document.getElementById('reflectionModal');
const reflectionTitle = document.getElementById('modal-reflection-title');
const reflectionDescription = document.getElementById('modal-reflection-description');
const reflectionImage = document.getElementById('modal-reflection-image');
const closeReflectionModal = document.querySelector('.close-reflection-modal');

// Event listener for each milestone to open reflection modal
milestones.forEach(milestone => {
    milestone.addEventListener('click', () => {
        // Get title, description, and image from data attributes
        const title = milestone.getAttribute('data-title');
        const description = milestone.getAttribute('data-description');
        const image = milestone.getAttribute('data-image');

        // Set modal content
        reflectionTitle.textContent = title;
        reflectionDescription.textContent = description;
        reflectionImage.src = image;

        // Show the reflection modal
        reflectionModal.style.display = 'flex';
    });
});

// Close reflection modal when the close button is clicked
closeReflectionModal.addEventListener('click', () => {
    reflectionModal.style.display = 'none';
});

// Close modal when clicking outside of the modal
window.addEventListener('click', (e) => {
    if (e.target === reflectionModal) {
        reflectionModal.style.display = 'none';
    }
});

// Fun facts and quiz logic
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

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const revealSkills = () => {
        progressBars.forEach(bar => {
            const skillLevel = bar.getAttribute("data-skill");
            bar.style.setProperty("--skill-level", skillLevel); // Dynamically set the width
            bar.classList.add("animate");
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSkills(); // Trigger the animation when the skills section is in view
                observer.disconnect(); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 }); // When 50% of the section is in view

    const skillsSection = document.querySelector(".skills");
    observer.observe(skillsSection);
});


