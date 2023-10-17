
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

//selecciono el menu y el ícono hamburguesa
const sideMenu = document.querySelector('#menu')
const menuIcon = document.querySelector('#show-menu')

//selecciono todos los link de la nav, y por cada uno tomo el nodo y le agrego un listener
document.querySelectorAll('#navLink').forEach( (node) => {
    node.addEventListener('click', () => {
        sideMenu.classList.remove('open')
    })
})
//al clickear el botón, toglea (quito y pongo) la clase open
menuIcon.onclick = () => sideMenu.classList.toggle('open')


