// why? we want to pass multiple arguments one by one, 
// when we pass enuough arguments, we can execute the function
// which is called function currying.
// Assumption: we have a sum function, we want to get the sum number after passing 3 arguments
function sum (a, b, c) {
    return a + b + c
}
function curry(fnnc) {
    return function curried (...args) {
        if (args.length >= fnnc.length) {
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
const curriedSum2 = curry(sum2)
const testCurriedSum2 = curriedSum2(1)(8)(12)
/**
 * dry run:
 * 1
 * args = 1
 * 1, 2
 * 
 */
console.log(testCurriedSum2())