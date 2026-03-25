// Mostrar Resultado en el Bloque de texto escondido en el html #pantalla
function showResult(ubic, mensaje) {
    const result = ubic.closest('.card').querySelector('#pantalla')
    result.classList.remove('d-none')
    result.querySelector('p').innerHTML = mensaje
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
    let input = ubic.closest('.card').querySelector('input')
    let nombre = cleanValue(input)
    console.log(nombre + " InputCap")
    return nombre
}
// Lista de Asistencia
let asistencia = []
function registrarAlumno(ubic) {
    let input = inputCap(ubic)
    if (input !== "") {
        asistencia.push(input)
    }
    showResult(ubic, asistencia)
}
// Lista de Urgencia
let pacientes = ["Carlos", "Maria", "Diego"]
function ingresarUrgencia(ubic) {
    let input = inputCap(ubic);
    if(input !== ""){
        pacientes.unshift(input)
    }
    showResult(ubic, pacientes)
}
// Lista de Delivery
let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function gestionarPedidos(ubic) { 
    let input = inputCap(ubic);
    if(input == "cancelar"){
        entregas.pop()
    }
    else if(input == "despachar"){
        entregas.shift()
    }
    else{
        alert("Pedido inentendido")
    }
    let result = `Pedidos pendientes: ${entregas}`
    showResult(ubic, result)
}
// Validador de Codigos
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function verificarCodigo(ubic) { 
    let input = inputCap(ubic)
    let mensaje = "Código inválido o expirado"
    for(let i = 0;i < codigosValidos.length;i++){
        if(input == codigosValidos[i]){
            mensaje = "¡Éxito! Código aceptado"
        }
    }
    showResult(ubic, mensaje)
}
// Simulador de Cuotas
function simularCuotas(ubic) { 
    let producto = inputCap(ubic)
    let cuota = cleanValue(document.querySelector("#Cuota"))
    let registroPagos = ""
    for(let i = 1;i <= 3;i++){
        registroPagos += `${producto} - ${cuota} ${i} | <br>`
    }
    showResult(ubic, registroPagos)
}
// Filtro de Presupuesto
let vitrina = [2500, 15000, 8000, 30000, 5000];
function filtrarPrecios(ubic) {
    let input = Number(inputCap(ubic))

    let opciones = "Te alcanza para los precios: "

    for(let i = 0; i < vitrina.length;i++){
        if(input >= vitrina[i]){
            opciones += `${vitrina[i]} - `
        }
    }
    showResult(ubic, opciones)
}

// Cálculo de Sueldo Líquido
function calcularDescuentos(bruto){
    return bruto * 0.8
}
function procesarSueldo(ubic) {
    let number = parseInt(inputCap(ubic))
    let sueldoLiquido = calcularDescuentos(number)
    let result = `Tu sueldo a pagar es: <strong>$${sueldoLiquido}!<strong>`
    showResult(ubic, result)
}

// El Carrito de Compras
let carrito = []
function actualizarPantalla(ubic){
    let result = carrito.join(" - ")
    showResult(ubic, result)
}
function agregarAlCarrito(ubic) { 
    let input = inputCap(ubic)
    if(input !== " "){
        carrito.push(input)
    }
    actualizarPantalla(ubic)
}