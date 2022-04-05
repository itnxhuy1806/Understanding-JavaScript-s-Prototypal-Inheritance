const human = {
     type: 'human'
}
// const tyler = {
//      hair: 'brown',
//      height: '6 foot',
//      type: 'human'
// }

// const sally = {
//      hair: 'blonde',
//      height: '5 foot 4',
//      type: 'human'
// }
// Object.setPrototypeOf(tyler, human)
// Object.setPrototypeOf(sally, human)
const createUser = (character) => ({
     ...character,
     type: 'human'
 })
 const tyler = createUser({
     hair: 'brown',
     height: '6 foot'
 })
 
 const sally = createUser({
     hair: 'blonde',
      height: '5 foot 4'
 })
 
 console.log(tyler.type)   // human