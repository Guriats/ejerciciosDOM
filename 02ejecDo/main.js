/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const myDiv = document.createElement("div");
document.body.appendChild(myDiv);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const myDivNew = document.createElement("div");
const myP = document.createElement("p");
myDivNew.appendChild(myP);
document.body.appendChild(myDivNew);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
loop con javascript.*/



const myDivLoop = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const myPloop = document.createElement("p");
  myDivLoop.appendChild(myPloop);
}

document.body.appendChild(myDivLoop);


/*2.4 Inserta dinamicamente con javascript en un html una p con el
texto 'Soy dinámico!'.*/

const myPtexto = document.createElement("p");
myPtexto.innerHTML = "Soy dinámico!";
document.body.appendChild(myPtexto);

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

    const WubbaText = document.querySelector('.fn-insert-here');
    WubbaText.innerHTML = 'Wubba Lubba dub dub';
    /*  document.body.appendChild(WubbaText);  con esta orden me lo pone debajo*/
    /*  WubbaText.textContent = 'Wubba Lubba dub dub'; esta expresión esta es correcta tb */


/*2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const miUl = document.createElement("ul");

for (const app of apps){
    const myli = document.createElement("li");
    myli.innerHTML = app;
    miUl.appendChild(myli); 
}

document.body.appendChild(miUl);

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

const myRemove = document.querySelectorAll('.fn-remove-me');
for (const fnRemove of myRemove) {
  fnRemove.remove();
}


/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con .appendChild.*/

/* CONSULTAR */

const div1 = document.querySelector('.fn-insert-here');
const div2 = document.querySelector('.fn-insert-here ~ div');  /*En el selector CSS .fn-insert-here ~ div, se está buscando un elemento <div> que sea adyacente (siguiente hermano) al elemento con la clase .fn-insert-here.*/

const p = document.createElement('p');
p.innerHTML = 'Voy en medio!';

div1.insertAdjacentElement('afterend', p);

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
.fn-insert-here*/

/*const div = document.querySelectorAll(".fn-insert-here");
const p = document.createElement(p);
for(const myDiv of div){
myDiv.innerHTML = "p"
div.appendChild(div);
}*/

const divs = document.querySelectorAll(".fn-insert-here");

for (const mydiv of divs) {
  const p = document.createElement('p');
  p.innerHTML = 'Voy dentro!';
  mydiv.appendChild(p);
}


