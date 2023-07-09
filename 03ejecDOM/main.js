/*1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const myUl = document.createElement ("ul");

for (const countrie of countries){
    const myLi = document.createElement ("li");
    myLi.innerHTML = countrie;
    myUl.appendChild(myLi); 
}

document.body.appendChild(myUl);


/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const fnRemove = document.querySelector (".fn-remove-me");
fnRemove.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHere = document.querySelector('[data-function="printHere"]');
const otroUl = document.createElement("ul");

for (const car of cars){
    const otroLi = document.createElement("li");
    otroLi.innerHTML = car;
    otroUl.appendChild(otroLi);
}

printHere.appendChild(otroUl);

/*.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.*/
const mares = [
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const mar of mares){
    const myDiv = document.createElement ("div");
    const myH4 = document.createElement ("h4");
    const myImag = document.createElement ("img");

    myDiv.appendChild (myH4);
    myH4.innerHTML = mar.title;
    myDiv.appendChild (myImag);
    myImag.src = mar.imgUrl;
    document.body.appendChild (myDiv);
}


/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs./*



/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.*/