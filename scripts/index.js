'use strict'

let cadena = prompt("Introduce una frase:")

if (cadena == null) {
    alert("Has cancelado el ejercicio")
} else if (cadena.trim() === "") {
    alert("Debes rellenar el formulario")
} else {
    console.log("Frase: " + cadena)
    console.log(letters(cadena) + " letras y " + words(cadena) + " palabras")
    console.log(upperString(cadena))
    console.log(titleString(cadena))
    console.log(backwardsLetters(cadena))
    console.log(backwardsWords(cadena))
    console.log(palindrome(cadena)?"Si es un palíndromo":"No es un palíndromo")
}
