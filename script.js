// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Бургер-меню на мобильных
(function() {
    var toggle = document.querySelector('.header__menu-toggle');
    var links = document.querySelector('.header__nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', function() {
            links.classList.toggle('active');
        });
        links.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                links.classList.remove('active');
            });
        });
    }
})();

// Кнопка «Наверх»
(function() {
    var btn = document.querySelector('.scroll-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function() {
        btn.classList.toggle('show', window.pageYOffset > 300);
    });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// Анимация появления блоков при скролле
(function() {
    var options = {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    };
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, options);
    document.querySelectorAll('.reveal-on-scroll').forEach(function(el) {
        observer.observe(el);
    });
})();
