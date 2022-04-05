function Car(make) {
     this.make = make
     this.wheels = 1
}
Car.wheels = 5
Car.prototype.color = 'black'
Car.prototype.wheels = 4

console.log(Car.prototype) // Car { color: 'black', wheels: 4 }

const myCar = new Car('Ford')

console.log(myCar.color)  // black

console.log(myCar) // Car { make: 'Ford', wheels: 1 }
