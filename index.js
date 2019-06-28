import { printSongInfo } from './song.js';
import { letExample, varExample, constExample } from './variables.js';
import { isSocretesMortalMan, isCakeVanillaOrChocolate } from './socretes.js';

//Exercise # 1 - Data Types
printSongInfo();

//Exercise # 2 - Variables and Constants
varExample();
letExample();
constExample();

//Exercise # 3 - If Statements and Operators
isSocretesMortalMan();
isCakeVanillaOrChocolate({flavor: 'vanilla', 'weight': 2, 'shape': 'round'});