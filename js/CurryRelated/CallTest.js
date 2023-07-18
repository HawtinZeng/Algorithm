function sum (...args) {
  console.log(args.length)
  return this.a + this.b + this.c
}
const obj = {
  a: 10,
  b: 20,
  c: 30
}
// 1. return curried function
// 2. call curried function to get sum result or another sum function
console.log(sum.call(obj, ...[1,3], ...[2]))