/* Función para mostrar y ocultar el menu */
const menu = document.querySelector('#menu__icon');
const nav = document.querySelector('.header__nav');

if (menu && nav) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    });
};

/* Función para indicar el elemento activo */
const links = document.querySelectorAll('.menu__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        const linkActive = document.querySelector('.menu__link.active');
        if (linkActive) {
            linkActive.classList.remove('active');
        };
        link.classList.add('active');
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    });
});