//data access
const data = [{ id: 1, name: 'khan', address: 'nelkhet' }];

console.log(data[0].address);


//aroakti my understent
const products = {
    data: [
        {id: 1, name: 'lenovo laptop', price: 70000},
        {id: 2, name: 'macbook', price: 190000},
    ]
} 
//cond products price
console.log(products.data[1].price);


//aroakti my understant
const user = {
    id: 5005,
    name: 'anis khan',
    address: {
        street:{
            first: '28/6 tangail',
            second: 'akortakor para',
            third: 'modhupur gatail'

        },
        city:'Dhaka'
    }
}
console.log(user.address.street.third);