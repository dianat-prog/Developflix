import peliculas  from './peliculas.js';


//Div Acción
const divAccion =document.getElementById('genero-28');

const peliAccion =peliculas.filter((genero) => genero.genre_ids.find((id)=> id===28));
//console.log(peliAccion);

peliAccion.forEach((peli)=>{
    //creareamos un div  y dentro de ese div crearemos dos más: uno para la imagen de la pelicula y otro para el titulo
    const divContenedor=document.createElement('div');
    divContenedor.classList.add('contenedor'); //Le añadimos una clase para modificar el CSS
    
    const divImagen=document.createElement('div');
    divImagen.classList.add('divimg'); //Le añadimos una clase para modificar el CSS

    const divTitulo=document.createElement('div');
    divTitulo.classList.add('divtitulo'); //Le añadimos una clase para modificar el CSS

   


   //Creamos un  objeto imagen
   const imgPeli=document.createElement('img');
   imgPeli.src=peli.poster_path;
   // backdrop_path 

   //elemento h3 para el titulo de la pelicula
   const tituloPeli=document.createElement('h3');
   console.log(tituloPeli);
   tituloPeli.textContent=peli.title;

   //añadimos el elemento imagen en el div de imagen
   divImagen.appendChild(imgPeli);

    //añadimos el elemento h3 en el div de titulo
    divTitulo.appendChild(tituloPeli);


    //Añadimos en el div contenedor los dos div : el de imagen y el de titulo
    divContenedor.appendChild(divImagen);
    divContenedor.appendChild(divTitulo);

    //por ultimo añadimos el div contenedor al genero-28
    divAccion.appendChild(divContenedor);

})

//28 accion 53 Thriller  12 aventura
