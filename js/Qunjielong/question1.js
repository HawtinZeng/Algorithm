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