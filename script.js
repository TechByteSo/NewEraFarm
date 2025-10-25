// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Кнопка ХОЧУ
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#contacts').scrollIntoView({
        behavior: 'smooth'
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .team-member, .service-card, .cta-button, .qr-container, .contact-info').forEach(el => {
    observer.observe(el);
});

// Добавляем класс для элементов, которые должны анимироваться при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hero-content').classList.add('fade-in');
});