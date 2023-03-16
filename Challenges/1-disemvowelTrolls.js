// ¡Los trolls están atacando tu sección de comentarios!

// Una forma común de lidiar con esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza.

// Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas.

// Por ejemplo, la cadena "¡Este sitio web es para perdedores LOL!" se convertiría en "Ths wbst s fr lsrs LL!".

// Nota: para este kata y no se considera una vocal.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "")

  //Utilizamos la expresión regular /[aeiou]/gi la bandera g para que encuentre todas las ocurrencias en lugar de detenerse en la primera.
  //La bandera i se utiliza para hacer que la búsqueda sea insensible a mayúsculas y minúsculas.
  // Luego, utilizamos el método replace() para reemplazar todas las vocales encontradas en la cadena de texto con una cadena vacía ""..
}

console.log(disemvowel("¡Este sitio web es para perdedores LOL!"));