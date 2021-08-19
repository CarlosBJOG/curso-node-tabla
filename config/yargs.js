const argv = require('yargs') 
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    demandOption: false,
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tbala por consola'
                })
                .option('h', {
                    alias: 'hasta',
                    demandOption: false,
                    type: 'number',
                    default: 10,
                    describe: 'Limite para la tabla de multiplicar'
                })
                .check((argv, options) => {
                    console.log('yargs', argv);
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;