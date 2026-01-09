document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Sombra na Navbar ao rolar
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Suave para links internos (caso o CSS scroll-behavior não funcione em algum navegador antigo)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // -80px para compensar a altura da navbar fixa
                    behavior: 'smooth'
                });
            }
        });
    });

    const menuBtn = document.querySelector('.menu-mobile');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Alterna a classe 'active' no menu e no botão
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    // Fecha o menu automaticamente quando clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

});

