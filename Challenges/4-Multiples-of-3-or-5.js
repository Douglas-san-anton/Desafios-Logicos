// Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

// Termina la solución para que devuelva la suma de todos los múltiplos de 3 o 5 por debajo del número pasado.Además, si el número es negativo, devuelve 0(para los idiomas que los tienen).

//   Nota: si el número es un múltiplo de 3 y 5, solo cuéntelo una vez.

function solution(number) {
  if (number < 0) return 0
  let suma = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }
  return suma;
}

console.log(solution(10))
console.log(solution(8))
console.log(solution(6))