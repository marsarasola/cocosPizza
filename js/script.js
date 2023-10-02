
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})


const navIcon = document.querySelector('.show-menu')
const navList = document.querySelector('#menu')

navIcon.onclick = () => navList.classList.toggle('open')