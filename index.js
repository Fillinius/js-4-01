// number
let cup = 5
console.log('Number', Number(cup), String(cup), Boolean(cup))

//String
let cupOfTeea = '5'
console.log('String', Number(cupOfTeea), String(cupOfTeea), Boolean(cupOfTeea))

//BigInt
let cupOfCoffee = 1n
console.log(
  'BigInt',
  Number(cupOfCoffee),
  String(cupOfCoffee),
  Boolean(cupOfCoffee)
)

//Boolean
let car = true
console.log('Boolean', Number(car), String(car), Boolean(car))
let notCar = false
console.log('Boolean', Number(notCar), String(notCar), Boolean(notCar))

//Null
let cupOfWater = null
console.log('Null', Number(cupOfWater), String(cupOfWater), Boolean(cupOfWater))

//Inderfined
let cupOf
console.log('Inderfined', Number(cupOf), String(cupOf), typeof Boolean(cupOf))

//Symbol
let sym = Symbol('id')
console.log('Symbol', Number(), typeof String(sym), Boolean())

//Object
let data = {
  cup: 5,
  cupOfTeea: '5',
}
console.log('Object', Number(data), typeof String(data), Boolean(data))
