console.log("Conexion funcional! :D")

function contruirFrase() {
    let palabra = ["Programar", "es"]
    palabra.push("increible")
    palabra.push("borrar")
    palabra.pop()
    alert(palabra.join(" "))
}
function filaEspera() {
    let alumnos = ["Juan", "Maria", "Pedro"]
    alumnos.unshift("Luis")
    let nombre = alumnos.shift()
    alert(`Entró ${nombre} y la fila ahora es: ${alumnos}`)
}
function reordNums() {
    let datos = [3, "gatos", "negros", "duermen"]
    datos[0] += 2;
    alert(datos.join(" "))
}
function matriz() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];
    alert(matriz[0][0] + matriz[1][1])
}
function array3D() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push(5)
    alert(datos)
}
function traductorMatrizArray() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    alert(`${sujetos[0]} ${verbos[0][1]} ${sujetos[1]}`)
}
function cleanArray() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.pop()
    inventario.shift()
    inventario.unshift("Monitor")
    alert(inventario.join(" "))
}
function matriz3x3() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1
    tablero[1][1] = 1
    tablero[2][2] = 1
    alert("Fila central: " + tablero[1].join(", "));
}
function consultorio() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos");
    pacientes.push("Diana");
    pacientes.shift();
    pacientes.unshift("Sonia");
    alert("Quedan " + pacientes.length + " pacientes. Siguiente: " + pacientes[0]);
}
function extraccion3D() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    alert(` En la canasta hay ${caja[1][0][1]} y ${caja[1][1][1]}`)
}