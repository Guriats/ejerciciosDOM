/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const myboton = document.querySelector(".showme");
console.log(myboton.textContent);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

const myh1 = document.querySelector("#pillado");
console.log(myh1.textContent);

/*1.3 Usa querySelector para mostrar por consola todos los p*/

const myP = document.querySelectorAll("p");
for (const parrafo of myP){
 console.log(parrafo);
}


/*1.4 Usa querySelector para mostrar por consola todos los elementos con
la clase.pokemon*/

const miPokemonPrimero = document.querySelectorAll(".pokemon");
for (const pokem of miPokemonPrimero){
console.log(pokem);}

/*con textContent */

const myPokemon = document.querySelectorAll(".pokemon");
for (const pokem of myPokemon){
console.log(pokem.textContent);}

/*1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".*/

const MyTestMe = document.querySelectorAll('[data-function="testMe"]');
for (const miTest of MyTestMe){
  console.log(miTest.textContent);}

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".*/

const elementos = document.querySelectorAll('[data-function="testMe"]');
let contador = 0;

for (const elemento of elementos) {
  contador++;
  if (contador === 3) {
    console.log(elemento.textContent);
    break;
  }
}