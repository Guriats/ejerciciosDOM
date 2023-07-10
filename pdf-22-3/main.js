/*Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente
una lista ul > li de elementos en el div de html con el atributo
data-function="printHere".*/

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const myUl = document.createElement ("ul");
const print = document.querySelector('[data-function="printHere"]');

for (const place of places){
    const myLi = document.createElement ("li");
    myLi.innerHTML = place;
    myUl.appendChild(myLi);
   
}
print.appendChild(myUl);
document.body.appendChild(print);