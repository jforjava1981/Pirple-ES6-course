/**
 * * hositing means ability to refer to a variable / function name before it is declared.
 * javascript hoists all variable/function declarations. Only declarations are hoiseted not initializations, meaning that even if we initialize a variable after its reference, all the references before the intialization will have a value undefined as demonstarated in below example.
 * 
 * * function(){
 *    console.log(name);
 *    if(true) {
 *        var name = "test";
 *    }
 *    console.log(name)
 *    
 * }
 * in above code if we use let compiler will complain as name is not present in the function's scope but is defined in "if statement" scope. However as we are using var we will get two lines of output first console.log will print undefined and second will print test. this because var declarations are hoisted by compiler and they are considered to be decalred at the top of the function even though they are declared somewhere else.

 */


/** 
 * 'var', 'const' and 'let' are used to declare containers for values usually known as    variables/constants.
 * identifiers declared using 'var' and 'let' can be assigned different values at later point in time since their first assignment. 
 * identifiers using const qualifier cannot be re-assigned a value once they are assigned a value. in short once assigned identifier cannot point to any other value.
 * identifiers declared using 'var' or 'let' need not have an initial value when they are declared. However const identifiers must have a value assigned to them when they are declared.
 * identifiers using 'var' qualifier are scoped to a function in which they are declared or to a global scope if decslared at top level in an empty javasript file.
 * identifiers using 'let' or 'const' are scoped to a block in which they are declared.
 * important difference between 'var' and 'let' is that identifiers using 'var' can be refered before they are declared unlike identifiers using 'let'.
  * so generally when we want to change the values or reuse the same container to store different values at different points of time during the execution of program, we use var or let.
 * Pereferably we use let over var  as it makes the scope clearer and avoids issues with var that might happen when its place of declaration is not aligned with its scope. e.g. in "hoisting". 
 * when we are sure that we dont want to change the value once assigned we use const.
 * 
 
**/

// var example
export function varExample() {
   var name = "shailesh";
   console.log(name);
   if(true){
     name = "john";
     console.log(name);
   }
   console.log(name);
}

// let example - defined in block
export function letExample() {
   // console.log(myName) // not visible here - should give reference error
   if(true) {
     let myName = "merry"
     console.log(myName);
   }
   // console.log(myName) // - should give reference error
}

//const example
export function constExample() {
  const PI = 3.14;
  let r = 2;
  let areaofcircle = PI * r * r;
  console.log(areaofcircle);
  r = 3;
  areaofcircle = PI * r * r;
  console.log(areaofcircle);
}