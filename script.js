// Sticky Navbar
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 50);

    // Back to Top Button
    const backTop = document.querySelector(".back-to-top");
    backTop.classList.toggle("active", window.scrollY > 500);
});

// Typing Animation
var typed = new Typed(".typing", {
    strings: ["Computer Science Student", "Web Developer", "Software Engineer", "Influencer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.hero-content, .section-title', {});
sr.reveal('.about-img, .contact-info', { origin: 'left', delay: 200 });
sr.reveal('.about-text, .contact-form', { origin: 'right', delay: 200 });
sr.reveal('.skill-card, .edu-card', { interval: 200 });

// Simple Form Alert (Since there's no backend)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out, Abhijeet will contact you soon!');
});