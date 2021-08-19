
const argv = require('./config/yargs.js');
const { crearArchivo } = require('./helpers/multiplicar.js');



console.clear();

// // console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.b);

// const n = 2;
// const[ , ,arg3 = 'base=5'] = process.argv
// const [, base=5] = arg3.split('=');


crearArchivo(argv.b, argv.l, argv.h)
    .then(console.log)
    .catch(console.warn);


