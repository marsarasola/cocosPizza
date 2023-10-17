
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

const sideMenu = document.querySelector('#menu')
const menuIcon = document.querySelector('#show-menu')

document.querySelectorAll('#navLink').forEach( (node) => {
    node.addEventListener('click', () => {
        sideMenu.classList.remove('open')
    })
})

menuIcon.onclick = () => sideMenu.classList.toggle('open')


