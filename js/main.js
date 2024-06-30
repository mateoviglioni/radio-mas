//! Tercera Entrega JavaScript 01/07/2024.

//! ------------------------------------------------------------------------------------------------------- Inicio.

let reproductor;

function onYouTubeIframeAPIReady() {
    reproductor = new YT.Player('reproductor', {
        height: '315',
        width: '560',
        videoId: '30oa0b2mdUo',
        events: {
            'onReady': alReproductorListo,
        }
    });
}

function alReproductorListo(evento) {
    const botonReproducir = document.getElementById('reproducir');
    const botonPausar = document.getElementById('pausar');
    const botonReiniciar = document.getElementById('reiniciar');
    const controlVolumen = document.getElementById('volumen');
    const selectVideo = document.getElementById('videoSelect');

    botonReproducir.addEventListener('click', () => {
        reproductor.playVideo();
        localStorage.setItem('estadoReproductor', 'reproduciendo');
    });

    botonPausar.addEventListener('click', () => {
        reproductor.pauseVideo();
        localStorage.setItem('estadoReproductor', 'pausado');
    });

    botonReiniciar.addEventListener('click', () => {
        reproductor.seekTo(0);
        reproductor.pauseVideo();
        localStorage.setItem('estadoReproductor', 'pausado');
    });

    controlVolumen.addEventListener('input', (e) => {
        reproductor.setVolume(e.target.value);
        localStorage.setItem('volumenReproductor', e.target.value);
    });

    selectVideo.addEventListener('change', (e) => {
        const idVideo = e.target.value;
        reproductor.loadVideoById(idVideo);
        localStorage.setItem('videoSeleccionado', idVideo);
    });

    const estadoGuardado = localStorage.getItem('estadoReproductor');
    const volumenGuardado = localStorage.getItem('volumenReproductor');
    const videoGuardado = localStorage.getItem('videoSeleccionado');

    if (videoGuardado) {
        reproductor.loadVideoById(videoGuardado);
        selectVideo.value = videoGuardado;
    }

    if (estadoGuardado === 'reproduciendo') {
        reproductor.playVideo();
    } else if (estadoGuardado === 'pausado') {
        reproductor.pauseVideo();
    } else {
        reproductor.stopVideo();
    }

    if (volumenGuardado) {
        controlVolumen.value = volumenGuardado;
        reproductor.setVolume(volumenGuardado);
    }
}

// ------------------------------------------------------------------------------------------------------- Separador.

let votoRealizado = false;

function votar(artist) {
    if (!votoRealizado) {
        if (localStorage.getItem('voto') === null) {
            localStorage.setItem('voto', artist);
            let votosElement = document.getElementById(`votos${artist.charAt(0).toUpperCase() + artist.slice(1)}`);
            let votos = parseInt(votosElement.textContent.split(' ')[0]);
            votos += 1;
            votosElement.textContent = `${votos} votos`;

            votoRealizado = true;

            mostrarResultado();
        } else {
            alert('Ya has realizado tu voto.');
        }
    } else {
        alert('Ya has realizado tu voto por un artista.');
    }
}

function mostrarResultado() {
    let artistas = ['maria', 'duki', 'emilia'];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let votoUsuario = localStorage.getItem('voto');
    resultado.innerHTML = `<p>Has votado por ${votoUsuario.charAt(0).toUpperCase() + votoUsuario.slice(1)}.</p>`;
}

//! ------------------------------------------------------------------------------------------------------- Fin.