var barr = document.querySelector(".js-barr");
var input = document.querySelector(".js-input");
var button = document.querySelector(".js-button");
var number = document.querySelector(".js-number");


function progress() {
    if(input.value < 0 || input.value > 100){
        alert("El valor ingresado no esta dentro del rango")
    }else if(isNaN(input.value)==true){
        alert("El dato ingresado no es un numero")
    }else {
        barr.style.width = input.value + "%";
        number.innerHTML = input.value + "%";
    }   
}



