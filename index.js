const { readAndParse , pelisSort , pelisSearch, pelisTag } = require('./pelis.js');

const pelis = readAndParse();
const datosArgv = process.argv;
const mapeo = {
    "sort": pelisSort,
    "search" : pelisSearch,
    "tag" : pelisTag
}
function main () {

    //Si length es mayor a 2 tiene que ejecutar alguna funcion del mapeo
    if(datosArgv.length <= 2){
        console.table(pelis)
    }else if (mapeo.hasOwnProperty(datosArgv[2].substring(2))){
        datosArgv[2] = datosArgv[2].substring(2)
        console.table(mapeo[datosArgv[2]](pelis , process.argv[3] ))
    }else{
        console.log(`La opcion ${datosArgv[2]} no existe`)
        console.log(`Vuelva a escribir con las siguientes opciones`)
        console.log(`--sort (title,rating,duracion,recaudacion)`)
        console.log(`--search (nombre de la pelicula a buscar)`)
        console.log(`--tag (accion, drama, real, clasico, terror, nueva, favorita)`)
    }
    
}

main();