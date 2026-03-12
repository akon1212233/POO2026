function showResult(btn, mensaje) {
    const result = btn.closest('.card').querySelector('#pantalla');
    result.classList.remove('d-none')
    result.querySelector('p').innerHTML = "Resultado: " + mensaje;
    console.log(result, mensaje)
}
// showResult(boton, texto)

function contador(btn) {
    let result = ""
    for (let i = 0; i <= 10; i++) {
        result += ` ${i} -`
    }

    showResult(btn, result)
}
function lista(btn) {
    let result = ""
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    for (let i = 0; i < curso.length; i++) {
        result += `${curso[i]}, `
    }
    showResult(btn, result)
}
function buscador(btn) {
    let contadorAprobados = 0;
    let desAprobados = 0;
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4.0) {
            contadorAprobados += 1;
        } 
        else { 
            desAprobados += 1; 
        };
    }
    showResult(btn, `Total de alumnos aprobados: ${contadorAprobados} \n Total de alumnos Desaprobados: ${desAprobados}`)
}
function filtro(btn) {
    let result = "";
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            result += `${productos[i]} `
        }
    }
    showResult(btn, result)
}
function sumando(btn) {
    let result = "";
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i]
    }
    result = `La colecta reunio un total de: ${totalRecaudado}`
    showResult(btn, result)
}
function formateador(btn) {
    let result = "";
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    for(let i = 0; i < asistentes.length; i++){
        if(i % 2 == 0){
            asistentes[i] += "[VIP] "
        }
        result += ` ${asistentes[i]},`
    }
    showResult(btn, result)
}
function buscadorstock(btn) { 
    let result = "";
    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = "Cuaderno"
    let vecesEncontrado = 0
    for(let i = 0; i < bodega.length; i++){
        if(bodega[i] == articuloBuscado){
            vecesEncontrado++
        }
    }
    result = `El artículo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en la bodega`
    showResult(btn, result)
}
function generador(btn) { 
    let result = "";
    let temperaturas = [22, 24, 28, 35, 21, 38];
    for(let i = 0; i < temperaturas.length; i++){
        if(temperaturas[i] >= 30){
            result += `<h5>¡ALERTA! Temperatura crítica de ${temperaturas[i]} grados.\n <h5>`
        }

    }
    document.querySelector(".asd").classList.replace("alert-success", "alert-danger")
    showResult(btn, result)
}