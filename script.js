// Theme Switcher & System Preference
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check stored theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else {
    htmlElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll Progress Bar & Back to Top Button
const scrollProgress = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;

    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Copy Email Functionality
const copyEmailBtn = document.getElementById('copy-email-btn');
const copyTooltip = document.getElementById('copy-tooltip');

copyEmailBtn.addEventListener('click', () => {
    const email = 'rghulamyaseen1@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        copyTooltip.textContent = 'Copied to Clipboard!';
        setTimeout(() => {
            copyTooltip.textContent = 'Click to copy';
        }, 2000);
    });
});

// Set Current Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();
