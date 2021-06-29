guardarPersona1();

//obtenerPersona1();

function obtenerPersona1(){
    if(localStorage.getItem("persona")){

    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log(persona);
    }
    else{
        console.log("No hay entradas en el Local");
    }
}

function guardarPersona1(){
    let persona = {
        nombre: "Emanuel",
        edad: 26,
        direccion: "Haedo",
        correo: "emanuelgallitelli@gmail.com"
    }

    localStorage.setItem("persona", JSON.stringify(persona));
};

//Cotizacion Dolar Blue



$(document).ready(function() {
    obtenerDatos();
});

function obtenerDatos() {
    $.get("https://www.dolarsi.com/aphttps://www.dolarsi.com/api/api.php?type=valoresprincipalesi/api.php?type=valoresprincipaleshttps://api-dolar-argentina.herokuapp.com/api/dolarblue").done(function(resultado, estado) {
        console.log("El estado que retorna GET a Tolkien es: " + estado);
        console.log(resultado);
        if (estado == "success") {
            let datos = resultado.casa;
            datos.forEach(cotizacion => {
                $("#cotizaciones").append("<tr><td>" + cotizacion.fecha + "</td><td>" + cotizacion.compra + "</td><td>" + cotizacion.venta + "</td></tr>");
            });
        }
    });
}