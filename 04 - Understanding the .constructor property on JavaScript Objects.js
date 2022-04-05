function Foo(){
     //.
 }
Object.defineProperty(Foo.prototype,
     'constructor', {
     enumerable: false,
     writable: true,
     configurable: true,
     value: Foo
}


)
console.log(Foo.prototype.constructor)  // [:Foo]

const a = new Foo()

console.log(a.constructor === Foo)  // true
console.log(a.constructor === Object)  // true