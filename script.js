document.addEventListener('DOMContentLoaded', () => {
    
    // --- SELETORES ---
    const menuBtn = document.querySelector('.menu-mobile'); // O botão hambúrguer
    const navLinks = document.querySelector('.nav-links');  // O menu lateral branco
    const closeBtn = document.querySelector('.btn-fechar-menu'); // O botão X
    const navbar = document.getElementById('navbar'); // A barra de navegação completa

    // --- 1. ABRIR MENU (Ao clicar no Hambúrguer) ---
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.add('active'); // Adiciona a classe que traz o menu para a tela
        });
    }

    // --- 2. FECHAR MENU (Ao clicar no X) ---
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            navLinks.classList.remove('active'); // Remove a classe e esconde o menu
        });
    }

    // --- 3. FECHAR MENU (Ao clicar em qualquer Link) ---
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active'); // Fecha o menu automaticamente ao navegar
        });
    });

    // --- 4. EFEITO DE SCROLL NA NAVBAR (Sombra ao rolar) ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});