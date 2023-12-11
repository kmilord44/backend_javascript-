/**
 * Función obtenerTiempoFaltante: Calcula el tiempo restante hasta una fecha límite.
 * @param {string} fechaLimite - La fecha límite para el conteo regresivo en formato de cadena ('MMM DD AAAA HH:mm:ss GMT-XXXX').
 * @returns {Object} - Objeto con los valores de tiempo restante: días, horas, minutos, segundos y tiempo total restante.
 */
function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);
    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    };
}

/**
 * Función cuentaRegresiva: Inicia una cuenta regresiva basada en el tiempo faltante hasta una fecha límite.
 * @param {string} tiempoFaltante - Tiempo faltante en formato de cadena ('MMM DD AAAA HH:mm:ss GMT-XXXX').
 */
function cuentaRegresiva(tiempoFaltante) {
    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;
        const e = document.getElementById("mensaje");
        
        let mensaje = "Faltan Para Navidad";
        e.innerHTML = mensaje;
        let santa = "off";
        let santaStop = document.getElementById("santaInmo");
        let sonido = new Audio("../sound/Dancing.mp3");
        
        if (t.tiempoFaltante < 1) {
            dias.innerHTML = "00";
            horas.innerHTML = "00";
            minutos.innerHTML = "00";
            segundos.innerHTML = "00";
            clearInterval(tiempoActual);
            mensaje = "¡Feliz Navidad!";
            e.innerHTML = mensaje;
            
            santaStop.classList.add("on");
            iniciar.classList.add("botonI");
            detener.classList.add("botonI");
            
            if (santa == "off") {
                iniciar.addEventListener('click', () => {
                    santaStop.classList.add("on");
                    sonido.play();
                });
                detener.addEventListener('click', () => {
                    sonido.pause();
                });
            }
        }
    }, 1000);
}

// Iniciar la cuenta regresiva con una fecha límite específica.
cuentaRegresiva('Dec 31 2023 16:30:00 GMT-0500');