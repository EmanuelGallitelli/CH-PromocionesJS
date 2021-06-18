

var seccionPromos = document.getElementById("promo");
console.log(seccionPromos.innerHTML);
console.log(seccionPromos.innerText);


function primerTitulo(){
    let nombre = prompt("Ingresa tu nombre");
    alert ("Hola, " + nombre + "! Selecciona tu destino.");

    var boton = document.getElementById("boton");
    boton.addEventListener("click", cambiarTitulo);

}

function cambiarPrecio(){
    let precio = document.getElementsByTagName("button");
    precio[2].innerText="$168.481";
    precio[3].innerText="$278.312";
    precio[4].innerText="$99.324";
    precio[5].innerText="$98.541";
    precio[6].innerText="$174.119";
    precio[7].innerText="$110.245";
    precio[8].innerText="$92.408";
    precio[9].innerText="$119.684";
    precio[10].innerText="$54.410";
    precio[11].innerText="$182.141";
    precio[12].innerText="$249.510";
    precio[13].innerText="$84.684";
}

