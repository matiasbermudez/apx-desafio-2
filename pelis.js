const fs = require('node:fs');


const readAndParse = () =>{
//Funcion que lee y parsea el JSON
    const readPelis = fs.readFileSync(__dirname +"/pelis.json");
    const pelis = JSON.parse(readPelis);
    return pelis
}

const pelisSort = (pelis , parametro ) =>{

    //ORDENA A BASE DEL PARAMETRO Sea TITLE RECAUDACION DURACION RATING
    let pelisOrdenadas = [];

    pelisOrdenadas = pelis.sort(( a , b ) => {
        if (a[parametro] > b[parametro]){
            return 1;
        }
        if (a[parametro] < b[parametro]){
            return -1
        }
        return 0
    })
    return pelisOrdenadas;
}

const pelisSearch = (pelis , parametro) =>{
     //BUSCA PELICULAS POR EL NOMBRE (PARAMETRO)
    console.table(pelis);
    let peliEncontrada = " ";

    for (let i = 0 ; i < pelis.length && peliEncontrada != pelis[i -1] ; i++){
        //USO FOR Y NO FOREACH PARA DARLE DOS CONDICIONES Y SE DETENGA EN CASO DE ENCONTRAR LA PELICULA
        console.log(i)
        if ((pelis[i].title).toLowerCase() === (parametro).toLowerCase()){
            peliEncontrada = pelis[i]
        }else if (peliEncontrada === " "){
            peliEncontrada = "No se encontro la pelicula"
        }
    }
    return peliEncontrada
}

const pelisTag = (pelis , parametro) =>{
//PELIS TAG BUSCA POR EL TAG DE LAS PELICULAS CON UN FOREACH YA QUE SI O SI DEBO RECORRER TODO EL ARRAY PELIS
    let pelisCoincidencia = []
    pelis.forEach( peli => {
        for (let i = 0 ; i < peli.tags.length ; i++){
            if((peli.tags[i]).toLowerCase() === (parametro).toLowerCase()){
                pelisCoincidencia.push(peli)
            }
        }
    });
    return pelisCoincidencia
}


//EXPORTACIONES
module.exports = {
    readAndParse,
    pelisSort,
    pelisSearch,
    pelisTag
}