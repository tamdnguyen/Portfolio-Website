const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navbar-page-content");
const intro = document.getElementById("intro");

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    intro.classList.toggle('show');
});