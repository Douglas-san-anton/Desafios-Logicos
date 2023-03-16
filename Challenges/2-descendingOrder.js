// Su tarea es crear una función que pueda tomar cualquier número entero no negativo como argumento y
// devolverlo con sus dígitos en orden descendente.Esencialmente,
// reorganiza los dígitos para crear el número más alto posible.

function descendingOrder(n) {
  if (n < 0) { "The number cannot be negative" }
  const number = n.toString()
  const arr = number.split('')
  arr.sort((a, b) => b - a)
  return parseInt(arr.join(''))
}

console.log(descendingOrder(000));
console.log(descendingOrder(24111356792));
console.log(descendingOrder(8989839332));

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}