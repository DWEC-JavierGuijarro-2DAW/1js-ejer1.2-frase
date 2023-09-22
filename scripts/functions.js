'use strict'

function letters(cadena) {
	return cadena.length
}

function words(cadena) {
	let cadenaEspaciada = cadena.split(" ")
	return cadenaEspaciada.length
}

function upperString(cadena) {
	return cadena.toUpperCase()
}

function titleString(cadena) {
	let cadenaEspaciada = cadena.split(" ")
	let cadenaMayusculas = []
	for (let valor of cadenaEspaciada) {
		valor.charAt(0).toUpperCase()
		cadenaMayusculas.push(valor.charAt(0).toUpperCase() + valor.slice(1)
		)
	}
	return cadenaMayusculas.join(" ");

}

function backwardsLetters(cadena) {
	let cadenaEspaciada = cadena.split("")
	let cadenaReversa = cadenaEspaciada.reverse()
	return cadenaReversa.join("")
}

function backwardsWords(cadena) {
	let cadenaEspaciada = cadena.split(" ");
	let cadenaReversa = cadenaEspaciada.reverse();
	return cadenaReversa.join(" ");
}

function palindrome(cadena) {
	cadena = cadena.toLowerCase().replaceAll(" ", "")
	let cadenaReversa = backwardsLetters(cadena)
	return cadena === cadenaReversa
}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
