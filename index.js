import * as moduloController from './modulo/controller.js' //En el entrypoint index.js, importa el módulo controller.js
import chalk from 'chalk';

// El entrypoint index.js debe utilizar las funciones del módulo para devolver
//la multiplicación de suma(1, 2) y suma(4, 5)

const sum = moduloController.suma(1, 2)
console.log(sum);

const mult = moduloController.multiplica(4, 5)
console.log(chalk.green(mult)); //Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde




