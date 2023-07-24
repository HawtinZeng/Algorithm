Function.prototype.customCall = function(self, ...args) {// this point self, and execute the function
  const fn = Symbol()
  self[fn] = this
  const res = self[fn](...args)
  delete self[fn]
  return res
}
Function.prototype.customBind = function(self, ...args) {
  const fn = this
  return function _boundFn(...args2) {
    return fn.customCall(self, ...args, ...args2)
  }
}
const user = {
  name: 'tom',
  age: 21
}
function printUsername(h) {
  console.log(`His/her name is ${this.name}`)
  console.log(`His/her name is ${h}`)
}
const boundPrintName = printUsername.customBind(user)
// boundPrintName()
const h = new printUsername('hello')
console.log(Object.getPrototypeOf(h))