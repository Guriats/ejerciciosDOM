/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums.*/

const albums = [
"Reign of Blood",
"Ride the Lightning",
"Painkiller",
"Iron Fist",
];

const myUl = document.createElement("ul");

for (const album of albums){
    const myLi = document.createElement("li");
    myLi.innerHTML = album;
    myUl.appendChild(myLi);
}
document.body.appendChild(myUl);

