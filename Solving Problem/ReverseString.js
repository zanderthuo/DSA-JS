// 3. Write a function that given a string, will return the string in reversed order. 
// Don't use inbuilt functions. For example given the string `alexander`, it should return or print `rednaxela`


// function stringReverse(str) {
//     let newStr = ""; // O(1)

//     for(let i = str.length - 1; i >= 0; i--) { // O(n)
//         newStr += str[i];
//     }

//     return newStr; // O(1)
// }

// console.log(stringReverse("alexander"))


// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverse("alexander"));

// function reverse(str) {
//     let reversed = "";
//     for(let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed; 
// }

// console.log(reverse("alexander"))


// Space complexity = 
// Time complexity = 

































// function reverseStr(str) {
//     let leftStr = ""; // O(1)
//     let rightStr = str.length - 1;
//     // for (let i = str.length-1; i >= 0; i--) { // O(n)
//     //     newSt += str[i];
//     // }

//     while (leftStr > rightStr) {
//         let temp = str[i];

//         str[leftStr] = str[rightStr];

//         str[rightStr] = temp;

//         leftStr += 1;
//         rightStr += 1;

//         return temp;
//     }



// }

// console.log(reverseStr("alexander"));