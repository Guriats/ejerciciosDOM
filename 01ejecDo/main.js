/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const myboton = document.querySelector(".showme");
console.log("myboton");

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

const myh1 = document.querySelector("#pillado");
console.log("myh1");

/*1.3 Usa querySelector para mostrar por consola todos los p*/
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
  console.log(paragraph.textContent);
});

/*1.4 Usa querySelector para mostrar por consola todos los elementos con
la clase.pokemon*/

const myPokemon = document.querySelector("*.pokemon");
console.log("myPokemon");

/*1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".*/

const elements = document.querySelectorAll('[data-function="testMe"]');
elements.forEach(element => {
  console.log(element.textContent);
});

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".*/