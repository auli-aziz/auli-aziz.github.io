const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


const toTop = () => window.scrollTo({top: 500, behavior: 'smooth'})

const gitHub = document.querySelector('aside .media-icon-button .github');
const insta = document.querySelector('aside .media-icon-button .insta');
const linkedIn = document.querySelector('aside .media-icon-button .linkedin');
 

gitHub.addEventListener('click', () => {
    window.open('https://github.com/auli-aziz');
 })
insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/auli.aziz/');
 })
linkedIn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/aulia-anugrah-aziz-a087631b7/');
 })