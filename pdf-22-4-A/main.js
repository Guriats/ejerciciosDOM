/*Dado el siguiente array de objetos. Crea dinamicamente en el html una
lista de div que contenga un elemento h4 para el titulo y otro elemento
img para la imagen.*/




const cities = [
    {
      title: "París",
      imgUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "Tokio",
      imgUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9raW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "Roma",
      imgUrl: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "Nueva York",
      imgUrl: "https://plus.unsplash.com/premium_photo-1674940502327-883129aeddda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnVldmElMjB5b3JrfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "Madrid",
      imgUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
  ];


for (const city of cities){
    const divs = document.createElement ("div");
    const myH4 = document.createElement ("h4");
    const photo = document.createElement ("img");

    myH4.innerHTML = city.title;
    photo.src = city.imgUrl;

    divs.appendChild(myH4);
    divs.appendChild(photo);

    document.body.appendChild(divs);
}

