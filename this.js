class person{
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}
const babu = new person('babu bhai',40)
console.log(babu)
babu.sleep();
const modhupuri = new person(`madhupurar manush khub valu`,39)
console.log(modhupuri)

