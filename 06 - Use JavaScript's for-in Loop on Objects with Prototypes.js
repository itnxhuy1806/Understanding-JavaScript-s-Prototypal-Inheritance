const obj = {
     firstName: 'Tyler',
     lastName: 'Clark'
 }
 
 const protoObj = {
     // last: 'Brown' // 2,3
     lastName: 'Brown' // 2,2
 }
 
 Object.setPrototypeOf(obj, protoObj)
 
 let n = 0
 let m = 0
 for (let property in obj) {
      m++
     if(obj.hasOwnProperty(property)){
         n++
     } 
 }
 console.log(n,m) 