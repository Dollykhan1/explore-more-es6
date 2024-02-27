/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string
 * 4. array function
 * 5. destrcturing sqread opreator
 * 6.. object. keys, object.values, object.entries
 * 7. for of used in arry and string,
 * 8. for in loop used in object
 * 
 */
const a = 56 ;
const number = [56,7,8]
const person = {
    name: 'dolly khan'
}
const message = `Hi,{' ${person.name}has a: ${a}access to ${numbers [2]}`
    

const squar = x => x * x ;
const sum = (a, b)=> a + b ;


const {age, z,...others } = { x: 2, y: 5, z: 3, name: 'object', age: 50 } 

const [first, second, ...remining] = [ 'atif', 'alif', 'khizir','khan']