/**
 * Key:
 *  We can build a event center, which can register event handler and trigger event
 */
class EventCenter {
  constructor() {
    this.eventCache = {} // eventName: callback functions
  }
  on(eventName, cb) {
    let callbacks = this.eventCache[eventName] || (this.eventCache[eventName] = [])
    callbacks.push(cb)
  }
  trigger(eventName, data) {
    const cbs = this.eventCache[eventName] || []
    cbs.forEach(item => {
      item(data)
    })
  }
  off(eventName, cb) {
    const cbs = this.eventCache[eventName] || []
    const index = cbs.indexOf(cb) && cbs.splice(index, 1)
  }
}
// Test case
const e = new EventCenter()
e.on('weatherWarning', (data) => console.log(data))
e.trigger('weatherWarning', 'A hot weather is coming!')
e.trigger('weatherWarning', 'A hot weather is coming again!')
