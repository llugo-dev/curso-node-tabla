const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            demandOption: false,
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicación en consola'
        },
        'h': {
            alias: 'hasta',
            demandOption: true,
            type: 'number',
            default: 10,
            describe: 'Limite superior de la tabla inclusivo'
        }
    })
    .check((argv, options) => { 
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }

        if (isNaN(argv.h)) {
            throw 'El limite superior "hasta" tiene que ser un número';
        }

        return true;
    })
    .argv;

module.exports = {
    argv
};