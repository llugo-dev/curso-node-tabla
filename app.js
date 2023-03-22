
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear();

// console.log(argv.b);
// console.log(argv.l);



crearArchivo(argv.b, argv.h, argv.l)
    .then(msj => {
        console.log(msj + ' creado!');
    })
    .catch(err => { 
        console.log(err);
    });





















