//index archivo incial que va a lanzar todo el proyecto de node
const {crearArchivoTabla} = require('./helpers/multiplicar'); 
const argv = require('./config/yargs')

console.clear();
console.log(argv);

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(error => console.error(error));
