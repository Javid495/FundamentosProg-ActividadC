// 1. Saludo Personalizado

//Se solicita tanto el nombre y edad
let NombreA = prompt("Ingrese su nombre: ");
let Edad = parseInt(prompt("Ingrese su edad: "));

//Se imprimen esos datos
alert("Hola " + NombreA + " Tienes " + Edad + " Años");


// 2. Area de un rectangulo

let Altura = parseInt(prompt("Ingrese la altura del triangulo: "));
let base = parseInt(prompt("Ingrese la base del triangulo: "));

let area = base * Altura;

alert("El area del triangulo es de: " + area)


// 3. Promedio de 3 notas

let nota1 = parseInt(prompt("Ingrese la nota #1"));
let nota2 = parseInt(prompt("Ingrese la nota #2"));
let nota3 = parseInt(prompt("Ingrese la nota #3"));

let Prom = (nota1 + nota2 + nota3) / 3;

alert("El promedio de las 3 notas ingresadas es de: " + Prom);

// 4. conversion de monedas

let moneda = parseFloat(prompt("Ingrese un valor en pesos colombianos: "));

let conversion = moneda / 4000;

alert("La conversion del valor ingresado en dolares es de: " + conversion)

// 5. Conversion de temperatura

let celsios = parseInt(prompt("Ingrese un valore en celsios: "));

let ConversionFah = (celsios * 9 / 5) + 32;

alert("El resultado de la conversion es de:" + ConversionFah);

// 6. Calcular un perimetro cuadrado

let long = parseFloat(prompt("Ingrese la longitud de un lado: "));

let perimetro = long * 4;

alert("el perimetro del cuadro es de: " + perimetro)

// 7.  Calcular el doble y el triple

let numero = parseInt(prompt("Ingrese un numero: "));

let doble = numero * 2;
let triple = numero * 3;

alert("el doble del numero " + numero + " es de: " + doble);
alert("el triple del numero " + numero + " es de: " + triple);

