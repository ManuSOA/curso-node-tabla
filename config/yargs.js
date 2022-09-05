const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'lista la tabla de multiplicar'
                })
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    demandOption: false,
                    describe: 'indica hasta que tabla se genera'
                })
                .check((argv,options) =>{
                    if( isNaN(argv.b)){s
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .argv

module.exports = argv