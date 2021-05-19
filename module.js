// IIFE function
// (function(exports, require, module, __dirname, __filename){
//           var age = 24;
//           // console.log(name);
// })()//("Imdadul Haque")


// NPM module:            (works in behind like above IIFE function)
// const color = require('cli-color');
// console.log(color.red("Hello NodeJS!"));


// Local Module
const auth = require(`./auth`);

auth.register('Imdadul Haque');
auth.login('Imdadul Haque','123456');


