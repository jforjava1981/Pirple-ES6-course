import { printSongInfo } from './song.js';
import { letExample, varExample, constExample } from './variables.js';
import { isSocretesMortalMan, isCakeVanillaOrChocolate } from './socretes.js';
import { isMortal } from './isMortal.js';

//Exercise # 1 - Data Types
printSongInfo();

//Exercise # 2 - Variables and Constants
varExample();
letExample();
constExample();

//Exercise # 3 - If Statements and Operators
isSocretesMortalMan();
isCakeVanillaOrChocolate({flavor: 'vanilla', 'weight': 2, 'shape': 'round'});

//Exercise # 4 - Functions
let name = 'Roger';
let checkIfMortal = function() {
  if( isMortal(name) ) {
  console.log(name + ' is Mortal');
  } else {
    console.log(name + ' is not Mortal');
  }
}
 checkIfMortal(name);
 name = null;
 checkIfMortal(name);
 name = 'Socretes';
 checkIfMortal(name);