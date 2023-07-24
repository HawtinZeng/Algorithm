// the main function of new operator is creating an object,
// whose properties are constructor prototype, and the property value is arguements
// just take new as a custom function
/**
 * new usage:
 * function Fun(a, b) {
 *  this.a = a
 *  this.b = b 
 * }
 * const ins = new Fun(10, 20)
 * ins:{
 *  a: 10,
 *  b: 20
 * }
 */

function Fun(a, b) {
 this.a = a
 this.b = b
}
function myNew(...args) {
  const ins = {}
  const fn = args[0]
  Object.setPrototypeOf(ins, fn)
  const argsActual = args.slice(1)
  const res = fn.apply(ins, argsActual)
  return typeof res === 'object' ? res : ins
}
console.log(myNew(Fun, 10, 20))
// Add constuctor
