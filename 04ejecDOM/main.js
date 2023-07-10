/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click*/

const btnToClick = document.createElement("button");
btnToClick.id = "btnToClick";
btnToClick.textContent = "Haz clic aquí";

btnToClick.addEventListener("click", () => {
  console.log();
});

document.body.appendChild(btnToClick);


/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const input = document.createElement('input');
input.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

document.body.appendChild(input);

/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/ 


const myinput = document.createElement('input');

input.addEventListener('input', (event) => {
    console.log(event.target.value);
});

document.body.appendChild(input);




