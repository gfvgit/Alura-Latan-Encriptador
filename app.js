var botonEncriptar = document.querySelector(".boton__encriptar");
var botonCopiar = document.querySelector(".boton__copiar");
var botonDesencriptar = document.querySelector(".boton__desencriptar");
var texto = document.querySelector(".texto");
var msj = document.querySelector(".msj");
var msj__info = document.querySelector(".msj__info");
var muneco = document.querySelector(".muneco");



var cambiar = [
["e","enter"], ["i","imes"], ["o","ober"],["a","ai"], ["u","ufat"],
]



var remplazar = (newValue) => { 
    msj.innerHTML = newValue;
    muneco.classList.add("hidden");
    texto.value = "";
    msj__info.style.display = "none";
    botonCopiar.style.display = "block";
}

var limpiar = () => {
    muneco.classList.remove("hidden");
    msj.innerHTML = "";
    msj__info.style.display = "block";
    botonCopiar.style.display = "none";
    texto.focus();
}

botonEncriptar.addEventListener("click",() => {
    var text = texto.value.toLowerCase();
    if (text != "") {
        function encriptar(newText) {
            for (var i = 0; i < cambiar.length; i++) {
                if (newText.includes(cambiar[i][0])) {
                    newText = newText.replaceAll(cambiar[i][0], cambiar[i][1]);
                };
            };
            return newText;
        }; 
    }else {
        alert("Ingrese el texto a encriptar")
        limpiar();
    }
    remplazar(encriptar(text));
});


botonDesencriptar.addEventListener("click",() =>{
    var text = texto.value.toLowerCase();
    if (text != "") {
        function desencriptar(newText) {
            for (var i = 0; i < cambiar.length; i++) {
                if (newText.includes(cambiar[i][1])) {
                    newText = newText.replaceAll(cambiar[i][1], cambiar[i][0]);
                };
            };
            return newText;
        }
    }else {
        alert("Ingrese el texto a desencriptar")
        limpiar();
    }
    remplazar(desencriptar(text));    
});

botonCopiar.addEventListener("click",() => {
    var text = msj;
    text.select();
    document.execCommand('copy');
    alert("el texto se ha copiado");
    limpiar();
});