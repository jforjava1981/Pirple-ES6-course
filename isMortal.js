export function isMortal(name) {
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
    isMortal : false
   },
   {
    name : 'Roger',
    isMortal : false
   },
   {
    name : 'Tom',
    isMortal : false
   },
   {
     name : 'Socretes',
     isMortal : true
   }
   ];

   function mortalManExists(name) {
      let manWithMatchingName;  
      if( men[0].name === name ) {
          manWithMatchingName = men[0];
      } else if ( men[1].name === name ) {
          manWithMatchingName = men[1];
      } else if ( men[2].name === name ) {
          manWithMatchingName = men[2];
      } else if ( men[3].name === name ) {
          manWithMatchingName = men[3];
      } else if ( men[4].name === name ) {
          manWithMatchingName = men[4];
      } else if ( men[5].name === name ) {
          manWithMatchingName = men[5];
      } else if ( men[6].name === name ) {
          manWithMatchingName = men[6];
      } else {
          manWithMatchingName = null;
      };
      return isManMortal(manWithMatchingName);
   }

   function isManMortal (man) {
      return man !== null && man.isMortal === true;
   } 

   return mortalManExists(name);
}