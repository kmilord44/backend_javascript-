function cT() {
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    hora = hora <10 ? "0" + hora : hora;
    minuto = minuto <10 ? "0" + minuto : minuto;
    segundo = segundo <10 ? "0" + segundo : segundo;

    let pantalla = hora + ":" + minuto + ":" + segundo;
    let relojdigital = document.querySelector(".Reloj");
    relojdigital.innerHTML = pantalla;


    
}

setInterval(cT, 1000);
