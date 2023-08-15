// Start at 10:52 AM 8/9/2023
// End at 11:01 AM 8/9/2023
// 题目1
/**
 * Analysis:
 * Implement event binding(subscribe and publish pattern)
 */
class People {
  constructor(name) {
    this.name = name
    this.eventHandler = {}
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
  on(eventName, callback) {
    this.eventHandler[eventName] || (this.eventHandler[eventName] = [])
    const eventCbs = this.eventHandler[eventName]
    eventCbs.push(callback)
  }
  emit(eventName, data) {
    const cbs = this.eventHandler[eventName]
    if (cbs === undefined) return
    cbs.forEach(cb => {
      cb(data)
    })
  }
  off(eventName, callback) {
    const cbs = this.eventHandler[eventName]
    if (cbs === undefined) return
    const cbIndex = cbs.indexOf(callback)
    cbs.splice(cbIndex, 1)
  }
}
// Test
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`)
}

const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`)
}

const jerry = new People('Jerry')
jerry.sayHi()
// => 输出：'Hi, I am Jerry'

jerry.on('greeting', say1)
jerry.on('greeting', say2)

jerry.emit('greeting', 'Hi')
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off('greeting', say1)
jerry.emit('greeting', 'Hi')
// => 只输出：'Hi, nice meeting you, too'




// Start at 11:01 AM 8/9/2023
// End at 11:08 AM 8/9/2023
/**
 * Analysis:
 * With Promise, which resolved after 300ms
 */
const sleep = (duration) => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

const anyFunc = async () => {
  console.log("123") // 输出 123
  await sleep(300) // 暂停 300 毫秒
  console.log("456") // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
}
// Case test
anyFunc()




// Start at 11:08 AM 8/9/2023.
// End at 12:15 AM 8/9/2023.
/**
 * Analysis:
 * 1. split path string.
 * 2. get the value one by one property.
 * 3. out when the value is not a Object.
 */
const deepGet = (obj, prop) => {
  const propsArray = prop.split('.')
  let currentObject = obj
  // loop props array
  for (let i = 0; i < propsArray.length; i++) {
    // satisfy getting array value with []
    const item = propsArray[i]
    // regex test
    const matchAllres = [...item.matchAll(/\[(\d+)\]/g)]
    if(matchAllres.length > 0) {
      const stringProp = item.slice(0, item.indexOf('['))
      currentObject = currentObject[stringProp]
      for (let j = 0; j < matchAllres.length; j++) {
          const index = parseInt(matchAllres[j][1])
          if (index !== NaN)
            currentObject = currentObject[index]
          else
            currentObject = currentObject[matchAllres[j][0]]
      }
    } else {
      currentObject = currentObject[item]
    }
    if (typeof currentObject === 'object') { // for Array and Object.
      continue
    } else {
      return currentObject
    }
  }
}

// test
const test1 = deepGet({
  school: {
    student: { name: 'Tomy' },
  },
}, 'school.student.name') // => 'Tomy'

const test2 = deepGet({
  school: {
    students: [
      { name: 'Tomy' },
      { name: 'Lucy' },
    ],
  }
}, 'school.students[1].name') // => 'Lucy'

// // 对于不存在的属性，返回 undefined
const test3 = deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
const test4 = deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined



// 补充测试: 多层数组嵌套
const test5 = deepGet({
  school: {
    students: [
      { name: 'Tomy' },
      [
        {name: 'Kitty'},
        {name: 'Jim'}
      ]
    ],
  }
}, 'school.students[1][0].name') // => Kitty
console.log(test1, test2, test3, test4, test5)




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




// Start at 12:36 AM 8/9/2023.
// End at 12:57 AM 8/9/2023.
/**
  分析：
  假设：不管是先手还是后手，均能赢得游戏，即找到一种拿球的序列，赢得比赛。
  盘子a， 盘子b
  [['a', 1], ['b', 3], ['a', 4]]
  如何才算玩家A赢得比赛？ A拿了之后，a盘子或者b盘子里只剩下一个球
 */
  findSuccessStrategy(aNum, bNum) {
    // 先手
    // Dynamic process
    findSuccessStrategy() // how to start?
    // 后手
  }
  const res = findSuccessStrategy(5, 7)
  if (res.length === 0)
    console.log('fail to find one solution to success')
  else
    console.log('success to find one solution to success', res)