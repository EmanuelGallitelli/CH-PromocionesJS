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

