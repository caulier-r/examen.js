/* Oef 4 Temperatuur converteren van Celsius naar Fahrenheit. Wanneer het minder is dan 15graden is het "frisjes"
Tussen 15 en 25 "aangenaam" en meer dan 25 "te warm". */

/* To convert celsius to Fahrenheit, we use the C to F formula wich is °F=(9/5) °C+32.== °F=°C*(9/5)+32
Dus in theorie: het is 20°C --> 20*(9/5)+32 = 68°F*/

//Eerst vragen we de gebruiker hoeveel graden het is in °C
let celsius = parseInt(prompt("Hoeveel °C is het momenteel?"));
//Dan berekenen we hoeveel dit is in °F
let fahrenheit = celsius*9/5+32
//Hier controleren we tussen welke °C het is zo weten we of het frisjes, aangenaam of te warm is
if(celsius < 15){
    console.log(`Het is ${celsius}°C, dit is gelijk aan ${fahrenheit}°F. Dit is frisjes.`)
}else if(celsius >= 15 && celsius <= 25){
    console.log(`Het is ${celsius}°C, dit is gelijk aan ${fahrenheit}°F. Dit is aangenaam.`)
}else{
    console.log(`Het is ${celsius}°C, dit is gelijk aan ${fahrenheit}°F. Dit is te warm!`)
}