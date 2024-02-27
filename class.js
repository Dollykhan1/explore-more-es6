// const products = [
//     {id: 1, name: 'lenovo',price: 68000},
//     {id: 2, name: 'dell',price: 47000},
//     {id: 3, name: 'hp',price: 42000},
//     {id: 4, name: 'mac',price: 168000},
// ]
// //has some properties, method
// class product{
//     country = 'Bangladesh';
    
//     speak(talk){
//         console.log(`talking about ${talk}`)
//     }
// }
// const lenovo = new product()
// console.log(lenovo)
// lenovo.speak('good morning America')
const products = [
    {id: 1, name: 'lenovo',price: 68000},
    {id: 2, name: 'dell',price: 47000},
    {id: 3, name: 'hp',price: 42000},
    {id: 4, name: 'mac',price: 168000},
]
//has some properties, method
class Teacher {
    country = 'Bangladesh';

    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math')
    }
}
const taposh = new Teacher('Taposh sir','bangla')
console.log(taposh);
// more teacher more work
const khan = new Teacher('khan','English')
console.log(khan)




