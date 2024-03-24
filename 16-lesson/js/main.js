const menu = document.querySelector('ul.menu');
const overlay = document.getElementById('overlay');
let menuWidth = menu.offsetWidth;

menuToggle(0);

function menuToggle(isOpen) {
    if (isOpen) {
        overlay.style.display = 'block';
        menu.style.right = 0;
        document.body.style.overflow = 'hidden';
    } else {
        overlay.style.display = 'none';
        menu.style.right = -menuWidth + "px";
        document.body.style.overflow = '';
    }
}