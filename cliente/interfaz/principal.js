const electro = new Electro();


electro.on("connect", function () { // Esparar a que la librería se conecte con el electrodoméstico
    console.log("Ya estoy conectado con la electrodoméstico!!")
    console.log("Con este hay " + electro.clientes + " clientes conectados");

    // Actualizar el reloj
    electro.on("reloj", function (hora) {
        document.getElementById("hora").innerHTML = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
    });

    electro.on("presencia", function (presente) {
        const otrosDiv = document.querySelector(".otros");
        const pElements = otrosDiv.querySelectorAll("p");
        if (presente) {
            pElements[pElements.length - 1].classList.add('borde-verde');
        } else {
            pElements[pElements.length - 1].classList.remove('borde-verde');
        }
    });

    electro.on("puertaAbierta", function (abierta) {
        const elemento = document.querySelector(".otros p:nth-child(3)");
        if (abierta) {
            elemento.innerHTML = '<img src="imagenes/puerta.png" width="180px" length="180px">';
        } else {
            elemento.innerHTML = '<img src="imagenes/puerta-cerrada.png" width="180px" length="180px">';
        }
    });
    
    /*electro.on("puertaAbierta", function (abierta) {
        const elemento = document.getElementById("abierta");
        if (abierta) {
          elemento.classList.add('borde-rojo');
        } else {
          elemento.classList.remove('borde-rojo');
        }
    });*/
});
