// Reproductor.

const player = new Twitch.Player('twitch-iframe', {
    channel: 'radiomasuytv',
    parent: ['radiomas.uy'],
    width: 800,
    height: 480,
    muted: false
});

const volumeControl = document.getElementById('volumen');
volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value / 100;
    player.setVolume(volume);
});

document.getElementById('reproducir').addEventListener('click', () => {
    player.play();
});

document.getElementById('pausar').addEventListener('click', () => {
    player.pause();
});

document.getElementById('reiniciar').addEventListener('click', () => {
    player.seek(0);
    player.play();
});

// Reproductor.





// Carrousel marcas.

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

// Carrousel marcas.





// Carrousel Slide.

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

// Carrousel Slide.






// VideoThumbnails.

const videoThumbnails = document.querySelectorAll(".video-thumbnail");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        const modalId = thumbnail.getAttribute("data-modal-target");
        const modal = document.getElementById(modalId);
        const iframe = modal.querySelector("iframe");

        modal.style.display = "block";
        iframe.src = iframe.getAttribute("data-src");
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-close");
        const modal = document.getElementById(modalId);
        const iframe = modal.querySelector("iframe");

        modal.style.display = "none";
        iframe.src = "";
    });
});

window.addEventListener("click", (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            const iframe = modal.querySelector("iframe");
            iframe.src = "";
        }
    });
});

// VideoThumbnails.