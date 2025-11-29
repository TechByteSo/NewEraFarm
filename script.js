// Бургер-меню для мобильных устройств
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяет стандартное поведение
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Плавная анимация
        });
    });
});

// Настройки для Intersection Observer
const observerOptions = {
    threshold: 0.1, // Срабатывает когда 10% элемента видно
    rootMargin: '0px 0px -50px 0px' // Отступ снизу
};

// Анимация появления элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Добавляет класс анимации
        }
    });
}, observerOptions);

// Наблюдаемые элементы
document.querySelectorAll('.section-title, .team-member, .mission-content, .point, .qr-container, .contact-info').forEach(el => {
    observer.observe(el);
});

// Анимация главного экрана при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hero-content').classList.add('fade-in');
});

// Кнопка "Наверх"
const scrollButton = document.querySelector('.scroll-to-top');

// Показ/скрытие кнопки при скролле
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

// Прокрутка наверх при клике
scrollButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});