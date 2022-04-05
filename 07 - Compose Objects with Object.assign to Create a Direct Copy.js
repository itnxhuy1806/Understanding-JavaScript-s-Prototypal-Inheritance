const parent = {
     hair: 'brown',
     heightInInches(){
         return this.height*12
     }
 }
 
 const child = Object.create(parent)
 const child2 = Object.assign({ height: 6}, parent)
 child.height = 6;
 
 console.log(child.heightInInches())  // 72
 console.log(child2.heightInInches())  // 72
 
 parent.heightInInches = () => true
 
 console.log(child.heightInInches())  // true
 console.log(child2.heightInInches())  // 72