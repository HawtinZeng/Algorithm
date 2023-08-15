// Start at 12:15 AM 8/9/2023.
// End at 12:36 AM 8/9/2023.
/**
 * Analysis:
 * combine nested function calling into one-level function calling
 * f(g(h(a))) => combo(f, g, h)(a)
 */
// const combo = (...) => {
//   return func
// }

function combo(...args) {
  return (actualArgs) => { // closure which wraps fn
    let changedArgs = actualArgs
    // from the tail to the head
    for (let i = args.length - 1; i >= 0; i--) {
      const fn = args[i]
      changedArgs = fn(changedArgs)
    }
    return changedArgs
  }
}


/* 以下为测试代码 */
const addOne = (a) => a + 1
const multiTwo = (a) => a * 2
const divThree = (a) => a / 3
const toString = (a) => a + ''
const split = (a) => a.split('')

// split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
console.log(testForCombo(666))
// => ["4", "4", "5"]

// 补充测试: 
console.log(testForCombo(2000))