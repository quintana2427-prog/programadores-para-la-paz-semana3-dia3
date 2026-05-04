let intento = 1
let ciclo = 1
const maximoIntentos = 4000000

console.log("Práctica inicial con while")
console.log("Vamos a repetir un proceso mientras el intento sea menor o igual al máximo.")

while (intento <= maximoIntentos) {
  console.log("Intento de revisión número:", intento, " ciclo, numero;", ciclo)
  intento = intento + 1
  ciclo = ciclo + 1
}

console.log("Proceso de revisión finalizado.")
