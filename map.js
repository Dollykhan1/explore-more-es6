// map ==> loops through each Element of the Array and do the operation that you passed in the call back function 
//and  hold the result from each opatiion that you passed in the call back function and hold the result from each  
//operation in an Array and finaly returns you the array 
const numbers = [1, 6, 5, 8, 9, 10];

function doubleIt(num){
   //console.log('num now',num)
    return num * 2;
}

//const result =numbers.map(doubleIt);
//console.log(result)
//const double2 = 
const output2 =numbers.map(n => n * 2);
console.log(output2)


// const numbers = [4, 6, 3, 8, 9, 10];
// const doubled =[];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)

// }
// console.log(doubled);