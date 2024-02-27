const products = [
    {id: 1, name: 'lenovo',price: 68000},
    {id: 2, name: 'dell',price: 47000},
    {id: 3, name: 'hp',price: 42000},
    {id: 4, name: 'mac',price: 168000},
]
//map app leptop name 
const names = products.map(product=>product.name)
//console.log(names)
//all price here
const prices = products.map(p =>p.price)
//console.log(prices)

//forEach nathing return

//forEach everyone id here
products.forEach(p=> console.log(p.id))

//filter 50000 more then 50000
const expensive = products.filter(p =>p.price>50000)
console.log(expensive)

//find lee then 50000
const affordable = products.find(p=>p.price<50000)
console.log(affordable)

//reduce total price coming
const total = products.reduce((acum,current)=>acum+current.price,0)
console.log(total)

