// Initialize Animate on Scroll (AOS) library
AOS.init({
    duration: 800,
    once: true,
});

document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const roles = ["Penetration Testing.", "Network Security.", "Vulnerability Research."];
    let roleIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.querySelector('.typewriter');
    let isDeleting = false;

    function type() {
        if (!typewriterElement) return;

        const currentRole = roles[roleIndex];
        let typeSpeed = isDeleting ? 75 : 150;

        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typewriterElement) {
        type();
    }

    // Intersection Observer for advanced animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the education timeline
    const timeline = document.querySelector('.education-timeline');
    if (timeline) {
        observer.observe(timeline);
    }

    // Observe each skill category card for staggered tag animation
    const skillCards = document.querySelectorAll('.skill-category-card');
    skillCards.forEach(card => {
        observer.observe(card);
    });
});

// Add this to the end of your script.js file

// Active Navigation Link Highlighter
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});