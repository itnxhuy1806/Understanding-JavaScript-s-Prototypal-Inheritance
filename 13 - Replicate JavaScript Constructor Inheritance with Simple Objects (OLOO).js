const house = {
     set houseColor(color) {
          this.color = color
          // console.log(this.color)
     }
}

const myHouse = Object.create(house)

console.log(myHouse.houseColor = 'white')  // white
console.log(myHouse)  // {color: 'white'}
