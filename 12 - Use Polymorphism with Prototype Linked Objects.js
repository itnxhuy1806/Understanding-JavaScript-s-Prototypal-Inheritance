const foo = {
     //name: 'tyler'
 }
 
 Object.defineProperty(foo, 'name',
 {
     value: 'tyler',
     writeable: false
 })
 const bar = {
     lastName: 'clark'
 }
 
 Object.setPrototypeOf(bar, foo)
 
 bar.name = 'james'
 
 console.log(bar.name)  // tyler