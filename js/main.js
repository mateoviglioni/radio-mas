//! Funcionalidades.

//! ------------------------------------------------------------------------------------------------------- Inicio.

//?--------------------------------------- Reproductor.

// Aquí va tu JavaScript
const iframe = document.getElementById('twitch-iframe');
const playButton = document.getElementById('reproducir');
const pauseButton = document.getElementById('pausar');
const resetButton = document.getElementById('reiniciar');
const volumeControl = document.getElementById('volumen');

const player = new Twitch.Player('twitch-iframe', {
    channel: 'radiomasuytv',
    parent: ['radio-mas.netlify.app'],
});

playButton.addEventListener('click', () => {
    player.play();
});

pauseButton.addEventListener('click', () => {
    player.pause();
});

resetButton.addEventListener('click', () => {
    player.seek(0);
    player.play();
});

volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value / 100;
    player.setVolume(volume);
});

//?--------------------------------------- Reproductor.





//*--------------------------------------- Carrousel marcas.

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

//*--------------------------------------- Carrousel marcas.





//?--------------------------------------- Slide.

document.addEventListener('DOMContentLoaded', () => {
    const markers = document.querySelectorAll('.markers a');
    const slider = document.querySelector('.slider');
    let currentSlide = 0;
    const totalSlides = markers.length;

    function goToSlide(index) {
        const slideWidth = slider.clientWidth;
        slider.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
        });
        markers.forEach(marker => marker.classList.remove('active'));
        markers[index].classList.add('active');
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    markers.forEach((marker, index) => {
        marker.addEventListener('click', (event) => {
            event.preventDefault();
            currentSlide = index;
            goToSlide(currentSlide);
        });
    });

    setInterval(autoSlide, 9000);
});

//?--------------------------------------- Slide.

//! ------------------------------------------------------------------------------------------------------- Fin.

