function sum (d, e, f) {
  return this.a + this.b + this.c + d + e + f
}
const obj = {
  a: 10,
  b: 20,
  c: 30
}
// 1. return curried function
// 2. call curried function to get sum result or another sum function
function currying(fn) {
  return function _fn(...args) {
    if (args.length === fn.length) 
      return fn.call(this, ...args)
    else
      return function __fn(...args2) {
        return _fn.call(this, ...args, ...args2)
      }
  }
}
const curriedSum3 = currying(sum)
const c4 = curriedSum3.call(obj, 1, 2)// return a function including reserved arguements
console.log(c4.call(obj, 3))// excute sum function