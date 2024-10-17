/* Oef 1: Controleer of een getal even of oneven is
* getal = 7 // console.log("getal is oneven")*/

/*let getal = parseInt(prompt("Voer een getal in")); <- wanneer je zelf een getal wilt laten invullen */
let getal = 7

/* laat het getal door 2 delen en kijken of het geen commagetal heeft.
 Zoja is het even, zo niet is het oneven */

if(getal %2 === 0){
    console.log("getal is even")
}else{
    console.log("getal is oneven")
}