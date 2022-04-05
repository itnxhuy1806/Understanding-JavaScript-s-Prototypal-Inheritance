const obj = {
     firstName: 'Huy'
}

const protoObj = {
     lastName: 'Ngo'
}

Object.setPrototypeOf(obj, protoObj);

console.log(obj.lastName)