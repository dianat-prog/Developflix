import peliculas  from './peliculas.js';

const url=`https://image.tmdb.org/t/p/w500`;


//Función mostrar peli
function mostraPeli(arrPelis,divSection){
    arrPelis.forEach((peli)=>{
        //creareamos un div  y dentro de ese div crearemos dos más: uno para la imagen de la pelicula y otro para el titulo
        const divContenedor=document.createElement('div');
        divContenedor.classList.add('contenedor'); //Le añadimos una clase para modificar el CSS
        
        const divImagen=document.createElement('div');
        divImagen.classList.add('divimg'); //Le añadimos una clase para modificar el CSS
    
        const divTitulo=document.createElement('div');
        divTitulo.classList.add('divtitulo'); //Le añadimos una clase para modificar el CSS
    
    
       //Creamos un  objeto imagen
        const imgPeli=document.createElement('img');
        imgPeli.src=url +peli.poster_path;

        imgPeli.alt='imagen de la pelicula '+ peli.title;
    
       //elemento h3 para el titulo de la pelicula
        const tituloPeli=document.createElement('h3');
        const linkTitulo=document.createElement('a');
    
        linkTitulo.textContent=peli.title;
        linkTitulo.href ="#";
        tituloPeli.appendChild(linkTitulo);

    
       //añadimos el elemento imagen en el div de imagen
        divImagen.appendChild(imgPeli);
    
        //añadimos el elemento h3 en el div de titulo
        divTitulo.appendChild(tituloPeli);
    
    
        //Añadimos en el div contenedor los dos div : el de imagen y el de titulo
        divContenedor.appendChild(divImagen);
        divContenedor.appendChild(divTitulo);
    
        //por ultimo añadimos el div contenedor al genero-28
        divSection.appendChild(divContenedor);
    
    })
    
}


//********************************************************* */
//********************************************************* */
//  Acción 28
const divAccion =document.getElementById('genero-28');
//Array con las peliculas de acción
const peliAccion =peliculas.filter((genero) => genero.genre_ids.find((id)=> id===28)); 
mostraPeli(peliAccion,divAccion);



//********************************************************* */
//********************************************************* */
//thriller(53)
const divThriller =document.getElementById('genero-53');
//Array con las peliculas de thriller
const peliThriller =peliculas.filter((genero) => genero.genre_ids.find((id)=> id===53)); 
mostraPeli(peliThriller,divThriller);




//********************************************************* */
//********************************************************* */
//12 aventura
const divAventura =document.getElementById('genero-12');
//Array con las peliculas de aventura
const peliAventura =peliculas.filter((genero) => genero.genre_ids.find((id)=> id===12)); 
mostraPeli(peliAventura,divAventura);