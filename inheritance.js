class Vehicle{
    constructor(name,price){
        this.name = name;
        this.name =price;

    }
    move(){
        console.log('my car is very good')
    }
}
class Bus extends Vehicle{
    constructor(name, price, seat, ticketprice){
        super(name, price);
        this.seat = seat;
        this.ticketprice = ticketprice;
    }
}
class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }

}