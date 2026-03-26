// Mostrar Resultado en el Bloque de texto escondido en el html #pantalla
function mostrarScreen(ubic, mensaje, modulo) {
    const result = ubic.closest('section').querySelector('#pantalla')
    result.classList.remove('secret')
    if(modulo == "error"){
    result.querySelector('p').className = 'error'
    result.querySelector('p').innerHTML = mensaje
    }
    else if(modulo == "especial"){
        result.querySelector('p').className = 'especial'
    result.querySelector('p').innerHTML = mensaje
    }
    else{
    result.querySelector('p').className = 'correct'
    result.querySelector('p').innerHTML = mensaje
    }
    console.log(result, mensaje + " ShowResult")
}
// Capturador y limpiador de valor de input
function cleanValue(inputElement) {
    let valor = inputElement.value
    inputElement.value = ""
    return valor
}
// Capturador de ubicacion de input
function inputCap(ubic){
    let input = ubic.closest('section').querySelector('input')
    let nombre = cleanValue(input)
    console.log(nombre + " InputCap")
    return nombre
}
/* 
Ejercicio 1: Función con validación de datos
Objetivo: Validar entradas antes de procesarlas.

Instrucciones:
Crea un input donde el usuario escriba un número.
Crea una función verificarNumero.
La función debe:
Capturar el valor del input
Verificar si está vacío
Si está vacío → mostrar: "Debes ingresar un número"
Si tiene valor → mostrar: "Número ingresado correctamente"
*/

function verificarNumero(ubic){
    let input = parseInt(inputCap(ubic))
    let res = ""
    let modulo = "error"
    console.log(input)
    if(!Number.isNaN(input)){
        res ="Numero ingresado correctamente!"
        modulo = "correcto"
    }
    else{
        res = "Dato incorrecto!"
        modulo = "error"
    }
    mostrarScreen(ubic, res, modulo)
}


/*
Ejercicio 2: Función que usa condicional múltiple
Objetivo: Aplicar lógica con múltiples condiciones.

Instrucciones:

Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más
*/
function evaluarNota(ubic) {
    let input = parseFloat(inputCap(ubic));
    let res = "Reprobado";
    let modulo = "error";

    if (isNaN(input)) {
        res = "Nota inválida";
    } else if (input >= 6.0) {
        res = "Sobresaliente!";
        modulo = "correcto";
    } else if (input >= 4.0) {
        res = "Aprobado";
        modulo = "correcto";
    }

    console.log(res);
    mostrarScreen(ubic, res, modulo);
}

/*
Ejercicio 3: Uso de múltiples funciones (flujo completo)
Objetivo: Integrar varias funciones con roles distintos.

Instrucciones:

Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}
Crea una función principal procesarNumero que:
Capture un número desde un input
Llame a ambas funciones
Muestre en pantalla:
Cuadrado: X
Triple: Y
Sugerencia didáctica (para tu clase)

Puedes usar estos ejercicios como:
*/
function calcularCuadrado(num){
    return num * num;
}
function calcularTriple(num){
    return num * 3;
}
function procesarNumero(ubic) {
    let input = parseInt(inputCap(ubic));

    if (isNaN(input)) {
        mostrarScreen(ubic, "¡Solo números!", "error");
        return; 
    }

    let res = "Cuadrado: " + calcularCuadrado(input) + "<br>" + 
            "Triple: " + calcularTriple(input);

    mostrarScreen(ubic, res, "especial");
}

/*
Ejercicio 4: Función que transforma texto
Objetivo: Manipular strings desde un input.

Instrucciones:

Crea un input para ingresar un texto.
Crea una función transformarTexto.
La función debe:
Capturar el texto
Convertirlo a mayúsculas (toUpperCase())
Mostrar el resultado en un <div>

Ejemplo esperado:

Entrada: hola mundo
Salida: HOLA MUNDO
*/
function transformarTexto(ubic) {
    let texto = inputCap(ubic); 

    if (texto.trim() === "") {
        mostrarScreen(ubic, "Por favor, ingresa un texto", "error");
        return;
    }
    let resultado = texto.toUpperCase();
    mostrarScreen(ubic, resultado, "especial");
}



// Codigo mio.

document.getElementById('checkbox').addEventListener('change', function() {
    const consola = document.querySelector('.consola');
    
    // Si el checkbox está marcado, quitamos 'secret', si no, lo ponemos
    if (this.checked) {
        consola.classList.remove('secret');
    } else {
        consola.classList.add('secret');
    }
});


// Guardamos el log original para no perder la consola del navegador (F12)
const logOriginal = console.log;

console.log = function(...args) {
    // 1. Ejecutar el log real en el navegador
    logOriginal.apply(console, args);

    // 2. Buscar tu sección de consola en el HTML
    const consolaVisual = document.querySelector('.consola');
    
    if (consolaVisual) {
        // Quitamos 'secret' para que se vea cuando haya actividad
        consolaVisual.classList.remove('secret');

        // Creamos una línea de texto con los argumentos unidos
        const linea = document.createElement('div');
        linea.className = 'linea-consola';
        linea.textContent = `> ${args.join(" ")}`;

        // Lo añadimos a la sección
        consolaVisual.appendChild(linea);

        // Auto-scroll al final para ver el último mensaje
        consolaVisual.scrollTop = consolaVisual.scrollHeight;
    }
};
