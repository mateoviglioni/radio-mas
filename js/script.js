//! Funcionalidades.

//! ------------------------------------------------------------------------------------------------------- Inicio.

//?--------------------------------------- Reproductor.

const options = {
    width: 854,
    height: 480,
    channel: "radiomasuytv",
    autoplay: false,
};

const player = new Twitch.Embed("twitch-embed", options);

document.getElementById("play").onclick = () => {
    player.play();
};

document.getElementById("pause").onclick = () => {
    player.pause();
};


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

