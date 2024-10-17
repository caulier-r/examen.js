/* Oef 3 Grootste van X (gebruiker kiest) getallen vinden. */

let getal1 = parseInt(prompt("Kies een getal naar keuze 1/3"));
let getal2 = parseInt(prompt("Kies een getal naar keuze 2/3"));
let getal3 = parseInt(prompt("Kies een getal naar keuze 3/3"));
    console.log(`U koos voor ${getal1}, ${getal2} en ${getal3}`)

/* Eerst laten we kijken of getal1 grooter is dan de andere 2 getallen */
if(getal1 > getal2 && getal1 > getal3){
    console.log(`Het grootste getal van de 3 getallen is ${getal1}`)
}
/* Daarna kijken we of getal2 grooter is dan de andere 2 getallen */
else if(getal2 > getal1 && getal2 > getal3){
    console.log(`Het grootste getal van de 3 getallen is ${getal2}`)
}
/* Als het eerste en het 2de getal niet grooter is, dan wordt er automatisch gezegd dat het 3de het grootst is */
else{
    console.log(`Het grootste getal van de 3 getallen is ${getal3}`)
}