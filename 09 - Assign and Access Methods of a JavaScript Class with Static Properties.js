class Food {
     static isHealthy() {
          return true
     }
     static canBeEaten(){
          return Food.isHealthy()
      }
}

// Food.isHealthy = () => true // true

console.log(Food.isHealthy())  // true| not static: Food.isHealthy is not a function
console.log(Food.canBeEaten())  // true