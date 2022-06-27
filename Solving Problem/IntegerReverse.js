function IntegerReverse(num) {
    const newNum = parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
    return newNum;
}

console.log(IntegerReverse(12345))