const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");



botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonClick = boton.textContent;
        if (boton.id === "limpiar"){
            pantalla.textContent = "0";           
             return;
        }
        if (boton.id === "eliminar"){

            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡ERROR!"){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id === "igual") {
            try {
                const expresion = pantalla.textContent;
                if (expresion.includes("//")) {
                    pantalla.textContent = "¡ERROR!";
                } else {
                  
                    const resultado = eval(expresion);
                    if (isNaN(resultado) || !isFinite(resultado)){
                        pantalla.textContent = "¡ERROR!";
                    } else {
                        pantalla.textContent = resultado;
                    }
                }
            } catch (error) {

                pantalla.textContent = "¡ERROR!";
            }
            return;
        }


        if (pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!"){
            pantalla.textContent = botonClick;
        } else {
        pantalla.textContent += botonClick;
        }
       

    })    
});