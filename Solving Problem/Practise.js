//     1. Given an array, write an efficient algorithm that reverses that array.
    
//     Example given [700, -1000, 1, 1, 200, 4, 89, 50, 701] return/console.log  [701, 50, 89, 4, 200, 1, 1, -1000, 700]
    
//     Given [1,2,3,4,5,6,7,8,9,10] return or print [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const ArrOne = [700, -1000, 1, 1, 200, 4, 89, 50, 701];

let startArr = 0;
let endArr = ArrOne.length - 1;

while (startArr < endArr) {

    let arr = ArrOne[startArr];
    ArrOne[startArr] = ArrOne[endArr];
    ArrOne[endArr] = arr;

    startArr ++;
    endArr --;

    console.log(arr);

}

//     
//    

// 3. Write a function that given a string, will return the string in reversed order. 
// Don't use inbuilt functions. For example given the string `alexander`, it should return or print `rednaxela`

// function reverseStr(str) {
//     let newSt = "";
//     for (let i = 0; i < str.length; i--) {
//         newSt += str[i];
//     }
//     return newSt;
// }

// reverseStr("alexander");