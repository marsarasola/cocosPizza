
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})


// const navIcon = document.querySelector('.show-menu')
// const navList = document.querySelector('#menu')

// navIcon.onclick = () => navList.classList.toggle('open')


const menuToggle = document.getElementById('show-menu');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  // Toggle para mostrar/ocultar el menú
  menu.style.transform = menu.style.transform === 'translateX(0)' ? 'translateX(100%)' : 'translateX(0)';
});