const numbers = [5, 2, 4,6, 1,15,67];
const total = numbers.reduce((previous,current) =>previous+current,0)
console.log(total)

//eqomalator first one + abr seconed one +first one
const sum = numbers.reduce((p,c) => p + c,0)
console.log(sum)
