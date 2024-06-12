//! Segunda Entrega JavaScript 12/06/2024.

//! ------------------------------------------------------------------------------------------------------- Separador.

class Terapia {
    constructor(nombre, costoPorSesion) {
        this.nombre = nombre;
        this.costoPorSesion = costoPorSesion;
    }

    calcularCosto(cantidadSesiones) {
        return this.costoPorSesion * cantidadSesiones;
    }
}

const terapias = [
    new Terapia("Quiropráctico", 1500),
    new Terapia("Masoterapia", 1000),
    new Terapia("Acupuntura", 1000)
];

const obtenerCantidadSesiones = (nombreTerapia) => {
    let cantidadSesiones;
    do {
        cantidadSesiones = Number(prompt(`Ingrese la cantidad de sesiones de ${nombreTerapia}: `));
    } while (isNaN(cantidadSesiones) || cantidadSesiones < 1);
    return cantidadSesiones;
};

const calcularYMostrarCostos = (terapias) => {
    let costoTotalGeneral = 0;

    terapias.forEach(terapia => {
        const cantidadSesiones = obtenerCantidadSesiones(terapia.nombre);
        const costoTotal = terapia.calcularCosto(cantidadSesiones);
        console.log(`Costo total de ${terapia.nombre}: $${costoTotal}`);
        costoTotalGeneral += costoTotal;
    });

    alert(`Costo total general: $${costoTotalGeneral}`);
};

const calcularCostoTotalGeneral = () => {
    calcularYMostrarCostos(terapias);
};

calcularCostoTotalGeneral();

//! ------------------------------------------------------------------------------------------------------- Separador.