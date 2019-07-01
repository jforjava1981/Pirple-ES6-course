import { printSongInfo } from './song.js';
import { letExample, varExample, constExample } from './variables.js';
import { isSocretesMortalMan, isCakeVanillaOrChocolate } from './socretes.js';
import { isMortal } from './isMortal.js';
import { timeAdder } from './timeAdder.js';
import { fizzBuzz, fizzBuzzPrime } from './fizzbuzz.js';

//Exercise # 1 - Data Types
//printSongInfo();

// //Exercise # 2 - Variables and Constants
// varExample();
// letExample();
// constExample();

// //Exercise # 3 - If Statements and Operators
// isSocretesMortalMan();
// isCakeVanillaOrChocolate({flavor: 'vanilla', 'weight': 2, 'shape': 'round'});

// //Exercise # 4 - Functions
// let name = 'Roger';
// let checkIfMortal = function() {
//   if( isMortal(name) ) {
//   console.log(name + ' is Mortal');
//   } else {
//     console.log(name + ' is not Mortal');
//   }
// }
//  checkIfMortal(name);
//  name = null;
//  checkIfMortal(name);
//  name = 'Socretes';
//  checkIfMortal(name);

// //Exercise # 5 - Switch

// console.log(timeAdder(5,"hour",5,"minutes") );

// console.log(timeAdder(false,false,5,"minutes") );

// console.log(timeAdder(false,false,5,"minutes") );

// console.log(timeAdder(90, "seconds", 30, "seconds"));

// console.log(timeAdder(43200, "seconds", 43200, "seconds"));

// console.log(timeAdder(20, "hours", 4, "hours"));

// Exercise # 6 - Loops
fizzBuzz();
fizzBuzzPrime();
