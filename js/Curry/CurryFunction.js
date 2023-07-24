// why? we want to pass multiple arguments one by one, 
// when we pass enuough arguments, we can execute the function
// which is called function currying.
// Assumption: we have a sum function, we want to get the sum number after passing 3 arguments
function sum (a, b, c) {
    return a + b + c
}
// fixed arguements number call
function curry(fnnc) {
    return function curried (...args) {
        if (args.length >= fnnc.length) {
            // context???
            return fnnc.apply(this, args)
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3))
// recursive implement
/**
 * There is two type closure in this process,
 * the first is function to curry, the second is array-alike argument
 * MUST return the calling result, OR we will get undefined!!!
 */
// call the curried function by '()'
function sum2 (...argsSum2) {
    return argsSum2.reduce((total, item) => total+item, 0)
}
function curry (fn) {
    return function curriedFn(...args) {
        return function (...args2) {
            if (args2.length === 0) {
                return fn.apply(this, args)
            } else {
                return curriedFn.apply(this, args.concat(args2))
            }
        }
    }
}
// non-fixed length call
const curriedSum2 = curry(sum2)
const testCurriedSum2 = curriedSum2(1)(8)(12)(13)()
/**
 * dry run:
 * 1
 * args = 1
 * 1, 2
 * 
 */
console.log(testCurriedSum2())


// test this function in currying

// why use this???
function sum (d, e, f) {
  return this.a + this.b + this.c + d + e + f
}
const obj = {
  a: 10,
  b: 20,
  c: 30
}
// original usage
// sum.call(obj, 1, 2, 3)

// target usage, 

// 1. return curried function
// 2. call curried function to get sum result or another sum function
function currying(fn) {
  return function _fn(...args) {
    if (args.length === fn.length) 
      fn.call(this, ...args)
    else
      return function __fn(...args2) {
        _fn.call(this, ...args, ...args2)
      }
  }
}
const curriedSum3 = currying(sum)
curriedSum3.call(obj, 1, 2)// return a function including reserved arguements
curriedSum3.call(obj, 3)// excute sum function

// fixed arguements number call
// function curry(fnnc) {
//   return function curried (...args) {
//       if (args.length >= fnnc.length) {
//           // context???
//           return fnnc.apply(this, args)
//       } else {
//           return function(...args2) {
//               return curried.apply(this, args.concat(args2))
//           }
//       }
//   }
// }