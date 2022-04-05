class Vehicle {
     isLegal(){
         return true
     }
 }
 
 class Car extends Vehicle{
     canBeUsed(){
         return this.isLegal()
     }
 }
 const myCar = new Car()
console.log(Object.getPrototypeOf(myCar) === Car.prototype)  // true
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype)  // true
console.log(Vehicle.prototype.isLegal())  // true