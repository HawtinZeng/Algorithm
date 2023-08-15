/**
 * What is a watcher and subject pattern?
 * We will collect watcher in the subject object, whenever we change the value of subject, we trigger watcher callback function.
 */
class Subject {
  constructor(val) {
    this.wacherCache = []
    this.val = val
  }
  registerWatcher(watcher) {
    this.wacherCache.push(watcher)
  }
  set(val) {
    this.val = val
    // trigger watcher update.
    const watchers = this.wacherCache
    watchers.forEach(watcher => {
      watcher.update(val)
    })
  }
}
class Watcher {
  constructor(cb) {
    this.cb = cb
  }
  update(data) {
    this.cb(data)
  }
}
const sub = new Subject(10)
const watch  = new Watcher(val => console.log(`the subject value changed to ${val}`))
sub.registerWatcher(watch)
sub.set(20)
sub.set(21)
sub.set(22)
sub.set(23)
