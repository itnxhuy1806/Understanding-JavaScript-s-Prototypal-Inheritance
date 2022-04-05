class Car{
     constructor(make){
      this.make = make    
     }
 }
 
 class Boat{
     constructor(engine){
      this.engine = engine
     }
 }
 
 Object.setPrototypeOf(Boat.prototype, Car.prototype)
 
 const myCar = new Boat('Ford')
 
 console.log(myCar instanceof Car) // true