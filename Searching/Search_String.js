 // function that accepts two strings
 const searchString = (long, short) => {
     let count = 0;
     // Loop over the longer string
     for (let i = 0; i < long.length; i++) {
         // loop over the shorter string
         for (let j = 0; j < short.length; j++) {
             console.log(short[i], long[i + j]);
             // if the characters don't match, break out of the inner loop
             if (short[j] !== long[i + j]) {
                 console.log("Break!!!")
                 break;
             }
             // if the characters do match, keep going
             if (j === short.length - 1) {
                 console.log("FOUND ONE!")
                     // if you complete the inner loop and find a match, increment the count of matches
                 count++;
             }
         }
     }
     // return the count
     return count
 }

 console.log(searchString("lori loled ", "lol"));