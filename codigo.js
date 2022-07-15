let botonEncriptar = document.querySelector(".btn-encriptar")
let botonDesencriptar = document.querySelector(".btn-desencriptar")
let munieco = document.querySelector(".contenedor-munieco-texto")
let resultado = document.querySelector(".p-resultado")
let textarea = document.querySelector("textarea")
let botonCopiar = document.querySelector(".btn-copiar")

function encriptar() {
    ocultarContenido();
    let area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
    textarea.textContent = encriptarTexto(area);
}

function desencriptar() {
    ocultarContenido();
    let area = recuperarTexto();
    resultado.textContent=deseencriptarTexto(area);
}

function recuperarTexto(){
    let area = document.querySelector("textarea");
    return area.value;
}

function ocultarContenido(){
    munieco.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (i = 0; i < texto.length; i++){
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function deseencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (i = 0; i < texto.length; i++){
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i++;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function copiar() {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", resultado.innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);

    alert("Copiado al portapapeles!")
  
}
  

botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
