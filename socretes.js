export function isSocretesMortalMan () {

  let men = [{
    name : 'Shailesh',
    isMortal : true
   },
   {
    name : 'John',
    isMortal : true
   },
   {
    name : 'Chris',
    isMortal : true
   },
   {
    name : 'Bob',
    isMortal : true
   },
   {
    name : 'Roger',
    isMortal : true
   },
   {
    name : 'Tom',
    isMortal : true
   },
   {
     name : 'Socretes',
     isMortal : true
   }
   ];

   if(men[0].isMortal === true && men[1].isMortal === true  && men[2].isMortal === true 
    && men[3].isMortal === true  && men[4].isMortal === true  
    && men[5].isMortal === true && men[6].isMortal === true) {
      // all men in "men" collection are mortals
      if(men[0].name === 'Socretes' || men[1].name === 'Socretes' 
         || men[2].name === 'Socretes' || men[3].name === 'Socretes'
         || men[4].name === 'Socretes' || men[5].name === 'Socretes'
         || men[6].name === 'Socretes') {
        //Socretes belongs to men collection
        console.log('Socretes is mortal as it belongs to men and all men are mortals');
      } 
  }

}