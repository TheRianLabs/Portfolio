const hamMenu = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.nav-links');
const links = navLinks.querySelectorAll('a');

hamMenu.addEventListener('click', () => {
    const isOpen = hamMenu.getAttribute('aria-expanded') === 'true';

    navLinks.classList.toggle('isOpen', !isOpen);
    hamMenu.setAttribute('aria-expanded', !isOpen);
    hamMenu.setAttribute('aria-label', isOpen ? 'Open navigation menu': 'Close navigation menu');

    console.log(isOpen);
});

function closeMenu() {
    navLinks.classList.remove('isOpen');
    hamMenu.setAttribute('aria-expanded', 'false');
    hamMenu.setAttribute('aria-label', 'Open navigation menu');
}

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 767) closeMenu();
})