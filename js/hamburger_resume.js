const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navbar-page-content");

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});