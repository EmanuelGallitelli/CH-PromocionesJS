

var seccionPromos = document.getElementById("promo");
console.log(seccionPromos.innerHTML);
console.log(seccionPromos.innerText);


function primerTitulo(){
    let nombre = prompt("Ingresa tu nombre");
    alert ("Hola, " + nombre + "! Selecciona tu destino.");
};

$(window).on("load", function(){
    console.log("Felicitaciones por llegar aqui");
});

const destinos = [
    {id: 1, nombre: "Barcelona: 15 días por 2 personas" , precio: 467.192, img: "scss/img/españa/barcelona.jpg"},
    {id: 2, nombre: "Barcelona: 7 días por persona" , precio: 233.596, img: "scss/img/españa/barcelona1.jpg"},
    {id: 3, nombre: "Madrid: 15 días por 2 personas" , precio: 546.218, img: "scss/img/españa/madrid.jpg"},
    {id: 4, nombre: "Madrid: 7 días por persona" , precio: 273.109, img: "scss/img/españa/madrid1.jpg"},
    {id: 5, nombre: "Valencia: 7 dias por persona" , precio: 149.135, img: "scss/img/españa/valencia.jpg"},
    {id: 6, nombre: "Valencia: 15 días por 2 personas" , precio: 372.462, img: "scss/img/españa/valencia1.jpg"},
    {id: 7, nombre: "Roma: 7 días por persona" , precio: 216.843, img: "scss/img/italia/roma.jpg"},
    {id: 8, nombre: "Roma: 15 dias por 2 personas" , precio: 615.496, img: "scss/img/italia/roma1.jpg"},
    {id: 9, nombre: "Venecia: 15 días por 2 personas" , precio: 526.286, img: "scss/img/italia/venecia.jpg"},
    {id: 10, nombre: "Paris: 7 días por 2 personas" , precio: 407.602, img: "scss/img/paris/paris.jpg"},
    {id: 11, nombre: "Paris: 15 días por persona" , precio: 276.693, img: "scss/img/paris/paris1.jpg"}
];

let carrito = [];

for (const destino of destinos){

    $("#viajes").append(`<div class= "imagenes" style="background-image: url(${destino.img})">
                        <h2> Destino: ${destino.nombre}</h2>
                        <b> $ ${destino.precio}</b>
                        <button id="btn${destino.id}">Comprar</button>   
                        </div>`);
    $(`#btn${destino.id}`).on("click",function(){
        console.log(`Compraste ${destino.nombre}`);
        carrito.push(destinos[destino.id - 1]);
        console.log(carrito);
    });
}

$(document).ready(function(){
    $(".centered-elements").click(function(){
        $("#viajes").fadeToggle(1000);
        console.log("Activar/Desactivar secuencia");
    })
});

const botonComprar = document.querySelector(".btn");
console.log()