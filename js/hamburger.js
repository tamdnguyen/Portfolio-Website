const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navbar-page-content");
const intro = document.getElementById("intro");
const about = document.getElementById("about");
const project = document.getElementById("project");
const nav = document.getElementById("nav");

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    intro.classList.toggle('show');
    about.classList.toggle('show');
    project.classList.toggle('show');
    nav.classList.toggle('show');
});