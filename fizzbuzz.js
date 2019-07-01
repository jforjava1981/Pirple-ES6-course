export function fizzBuzz() {
      for(let i = 1 ; i <= 100; i++) {
          printFizzBuzz(i);
      }
}

export function fizzBuzzPrime() {
      function isPrime(num) {
        for(let i = 2; i < num; i++) {
            if( num % i === 0 ) {
              return false;
            }
        }
        return true;
      }
      for(let i = 1 ; i <= 100; i++) {
          if(  i !== 1 && isPrime(i) ) {
            console.log("Prime");  
          } else {
            printFizzBuzz(i);  
          }
      }
}


export function printFizzBuzz(i) {
    if( i % 15 === 0 ) {
        console.log("FizzBuzz");
    } else if( i % 3 === 0 ) {
        console.log("Fizz");
    } else if ( i % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

