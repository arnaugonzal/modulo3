let operador;
let numero;
let operacion; 

const validar = (num,operacion) => {
    switch (operacion) {
        case "cuadrado":
        case "modulo":
            if (isNaN(num) || num === '') {
                return false;
            }
                return true;
        case "factorial":
            if (!isNaN(num) && num >= 0 && Number.isInteger(+num) && num !== '') {
                return true;
            }
                return false;
        case "suma":
        case "resta":
        case "multiplicacion":
        case "potencia":

            if (!isNaN(num) && num !== '' && numero !== ''){
                return true;
            }
                return false;
        
        case "division":
        case "resto":
            if (!isNaN(num) && num !== '' && numero !== '' && +num !== 0){
                return true;
            }
                return false;
        case "CSV":
            if (num.some(elemento => isNaN(elemento)==true || elemento == '')) {
                return false;
            }
                return true;
}
    
}
const error = (num) => {
    num.value = "Error";
    let info = document.querySelectorAll("#info");
    info[0].innerHTML = "Info sobre el número";
}

const vaciar = () => {
    document.getElementById("pantalla").value = "";
  }

const cuadrado = () => {
    operacion = "cuadrado";
    let num = document.getElementById("pantalla");
    if (validar(num.value, operacion)){
        num.value = num.value * num.value;
        rellenar_info();
    } else {
        error(num);
    }

  }
const rellenar_info = () => {
    let num = document.getElementById("pantalla");
    let info = document.querySelectorAll("#info");
    if (num.value < 100) {
        info[0].innerHTML = "Info: El resultado es menor que 100";
    } else if ( (num.value >= 100) && (num.value <= 200)){
        info[0].innerHTML = "Info: El resultado está entre 100 y 200";
    } else {
        info[0].innerHTML = "Info: El resultado es superior a 200";
    }
}
const mod = () => {
    operacion = "modulo";
    let num = document.getElementById("pantalla");

    if (validar(num.value, operacion)){
        if (num.value < 0) {
            num.value = -num.value;
            rellenar_info();
        }
        num.value = num.value;
        rellenar_info();
    } else {
        error(num);
    }
}

const fact = () => {
    let operacion = "factorial";
    let num = document.getElementById("pantalla");

    if (validar(num.value, operacion)){
        let factorial = 1;
        for(let i = num.value; i > 0; --i){
            factorial *= i;
        }
        num.value = factorial;
        rellenar_info();
    } else {
      error(num);
    }

}

const add = () => {
    let num = document.getElementById("pantalla");
    numero = +num.value;
    if (isNaN(numero)) {
        error(num);
    } else {
        operador = "suma";
        vaciar();
    }
    
}
const resta = () => {
    let num = document.getElementById("pantalla");
    numero = +num.value;
    if (isNaN(numero)) {
        error(num);
    } else {
        operador = "resta";
        vaciar();
    }
}
const mul = () => {
    let num = document.getElementById("pantalla");
    numero = +num.value;
    if (isNaN(numero)) {
        error(num);
    } else {
        operador = "multiplicacion";
        vaciar();
    }
}

const div = () => {
    let num = document.getElementById("pantalla");
    numero = +num.value;
    if (isNaN(numero)) {
        error(num);
    } else {
        operador = "division";
        vaciar();
    }
}

const resto = () => {
    let num = document.getElementById("pantalla");
    numero = +num.value;
    if (isNaN(numero)) {
        error(num);
    } else {
        operador = "resto";
        vaciar();
    }
}

const potencia = () => {
    let num = document.getElementById("pantalla");
    numero = +num.value;
    if (isNaN(numero)) {
        error(num);
    } else {
        operador = "potencia";
        vaciar();
    }
}

const eq = () => {
    let num = document.getElementById("pantalla");
    switch (operador) {
        case "suma":

            if (validar(num.value, operador)){
                num.value = +num.value + numero;
                rellenar_info();
                operador = "";
                break;
            } else {
                error(num);
                break;
            }

        case "multiplicacion":

            if (validar(num.value, operador)){
                 num.value = num.value * numero;
                rellenar_info();
                operador = "";
                break;
            } else {
                error(num);
                break;
            }
           
        case "resta":
            if (validar(num.value, operador)){
                num.value = numero -num.value;
                rellenar_info();
                operador = "";
                break;
           } else {
                error(num);
                break;
           }
        
        case "division":
            if (validar(num.value, operador)){
                num.value = numero/num.value;
                rellenar_info();
                operador = "";
                break;
           } else {
                error(num);
                break;
           }
        case "resto":
            if (validar(num.value, operador)){
                num.value = numero%num.value;
                rellenar_info();
                operador = "";
                break;
           } else {
                error(num);
                break;
           }
        
        case "potencia":
            if (validar(num.value, operador)){
                num.value = numero**num.value;
                rellenar_info();
                operador = "";
                break;
           } else {
                error(num);
                break;
           }
    }
}

const sumatorio = () => {
    let operacion = "CSV";
    let num = document.getElementById("pantalla");
    let suma = 0;
    let array = num.value.split(",");

    if (validar(array, operacion)){
        for (let i = 0; i < array.length; i++) {
            suma += +array[i];
        }
        num.value = suma;
        rellenar_info();
    } else {
       error(num);
    }
}

const ordenar = () => {
    let operacion = "CSV";
    let num = document.getElementById("pantalla");
    let array = num.value.split(",");
    if (validar(array, operacion)){
        num.value = array.sort((a,b) => a-b);
        let info = document.querySelectorAll("#info");
        info[0].innerHTML = "Info sobre el número";
    } else {
        error(num);
    }
}

const revertir = () => {
    let operacion = "CSV";
    let num = document.getElementById("pantalla");
    let array = num.value.split(",");
    if (validar(array, operacion)){
        num.value = array.reverse();
        let info = document.querySelectorAll("#info");
        info[0].innerHTML = "Info sobre el número";
    } else {
      error(num);
    }

}

const quitar = () => {
    let operacion = "CSV";
    let num = document.getElementById("pantalla");
    let array = num.value.split(",");
    if (validar(array, operacion)){
        array.pop();
        num.value = array.join(",");
        let info = document.querySelectorAll("#info");
        info[0].innerHTML = "Info sobre el número";
    } else {
      error(num);
    }
}
    