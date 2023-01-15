const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


const toTop = () => window.scrollTo({top: 500, behavior: 'smooth'})

const gitHub1 = document.querySelector('aside .media-icon-button .github1');
const insta1 = document.querySelector('aside .media-icon-button .insta1');
const linkedIn1 = document.querySelector('aside .media-icon-button .linkedin1');

const gitHub2 = document.querySelector('aside .media-icon-button .github2');
const insta2 = document.querySelector('aside .media-icon-button .insta2');
const linkedIn2 = document.querySelector('aside .media-icon-button .linkedin2');

const gitHub3 = document.querySelector('aside .media-icon-button .github3');
const insta3 = document.querySelector('aside .media-icon-button .insta3');
const linkedIn3 = document.querySelector('aside .media-icon-button .linkedin3');
 

gitHub1.addEventListener('click', () => {
    window.open('https://github.com/auli-aziz');
 })
insta1.addEventListener('click', () => {
    window.open('https://www.instagram.com/auli.aziz/');
 })
linkedIn1.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/aulia-anugrah-aziz-a087631b7/');
 })

gitHub2.addEventListener('click', () => {
    window.open('https://github.com/auli-aziz');
 })
insta2.addEventListener('click', () => {
    window.open('https://www.instagram.com/auli.aziz/');
 })
linkedIn2.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/aulia-anugrah-aziz-a087631b7/');
 })

gitHub3.addEventListener('click', () => {
    window.open('https://github.com/auli-aziz');
 })
insta3.addEventListener('click', () => {
    window.open('https://www.instagram.com/auli.aziz/');
 })
linkedIn3.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/aulia-anugrah-aziz-a087631b7/');
 })