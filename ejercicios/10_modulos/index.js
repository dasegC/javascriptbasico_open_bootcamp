import * as matematicas from './controller.js';
import chalk from 'chalk';

const adicion = matematicas.suma(1, 2);
//console.log(adicion);

const multiplicacion = matematicas.multiplica(4, 5);
//console.log(multiplicacion);
console.log(chalk.green(`Adicion: ${adicion} - Multiplicacon: ${multiplicacion}`));