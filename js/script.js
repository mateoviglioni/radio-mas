//! Funcionalidades.

//! ------------------------------------------------------------------------------------------------------- Inicio.

//?--------------------------------------- Reproductor.

const player = new Twitch.Player('twitch-iframe', {
    channel: 'radiomasuytv',
    parent: ['radio-mas.netlify.app'],
    width: 800,
    height: 480,
    muted: true // Se asegura de que el video comience silenciado
});

// Controlar el volumen con la barra
const volumeControl = document.getElementById('volumen');
volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value / 100; // Convertir el valor a un rango de 0 a 1
    player.setVolume(volume); // Establecer el volumen del reproductor
});

// Funcionalidad de los botones de control
document.getElementById('reproducir').addEventListener('click', () => {
    player.play(); // Reproducir el video
});

document.getElementById('pausar').addEventListener('click', () => {
    player.pause(); // Pausar el video
});

document.getElementById('reiniciar').addEventListener('click', () => {
    player.seek(0); // Reiniciar el video al inicio
    player.play(); // Reproducir el video nuevamente
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

