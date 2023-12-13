/***** NavBar *****/
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

/***** Video Presentation - Button Sound *****/
document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video-player");
    var muteButton = document.getElementById("muteButton");

    muteButton.addEventListener("click", function () {
        toggleMute();
    });

    function toggleMute() {
        video.muted = !video.muted;

        if (video.muted) {
            muteButton.src = "./assets/icons/sound-off.png";
        } else {
            muteButton.src = "./assets/icons/sound-on.png";
        }
    }
});

