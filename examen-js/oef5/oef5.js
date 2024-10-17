/* Som van cijfers in een getal berekenen. Je MOET een while loop gebruiken en je maag geen array gebruiken. */

//We vragen de gebruiker om een eindgetal te kiezen.
let eindGetal = parseInt(prompt("Kies een eindgetal."));
let i = 1;
let som = 0;
//Daarna gaan we alle getallen van 1 tot het eindgetal gaan optellen met elkaar om zo de som uit te komen.
while (i <= eindGetal) {
    som += i;
    i++;
}
console.log(`De som van de getallen 1 tot en met ${eindGetal} = ` + som);