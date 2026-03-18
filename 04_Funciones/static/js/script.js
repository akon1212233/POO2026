function showResult(btn, mensaje) {
    const result = btn.closest('.card').querySelector('#pantalla');
    result.classList.remove('d-none')
    result.querySelector('p').innerHTML = "Resultado: " + mensaje;
    console.log(result, mensaje)
}
function cleanValue(inputElement) {
    let valor = inputElement.value
    inputElement.value = ""
    return valor
}
let asistencia = []
function lista(btn) {

    let input = btn.closest('.card').querySelector('input');
    let nombre = cleanValue(input);
    if (nombre !== "") {
        asistencia.push(nombre);
    }
    showResult(btn, asistencia)
}
function urgencia(btn) {
    
}
function delivery(btn) { }
function descuento(btn) { }
function cuotas(btn) { }
function presupuesto(btn) { }
function sueldo(btn) { }
function compras(btn) { }