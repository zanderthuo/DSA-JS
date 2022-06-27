function isPalindrome(str) {
    let newStr = str.toLowerCase();

    const reversedStr = newStr.split("").reverse().join("");

    return newStr === reversedStr
}

console.log(isPalindrome("eye"))