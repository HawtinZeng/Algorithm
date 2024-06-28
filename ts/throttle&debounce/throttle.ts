// 节流
function input(s: string) {
  console.log(s)
  console.timeEnd(s)
}

function throttle(fn: (...args: any[]) => void, time: number, immediatly = true) {
  let timer: null | NodeJS.Timeout = null
  let previous = 0;

  return (s: string) => {
    if (!timer) {
      if (immediatly && previous === 0) {
        fn(s);
        previous  = Date.now();
      } else {
        if (Date.now() - previous > time) {
          timer = setTimeout(() => {
            fn(s);
            timer = null;
          }, time);
        }
      }
    }
  }
}
const throttleInput = throttle(input, 1000);
console.log('start...')
setTimeout(() => throttleInput('500'), 500)
console.time('500')
setTimeout(() => throttleInput('300'), 300)
console.time('300')
setTimeout(() => throttleInput('1500'), 1500)
console.time('1500')

export {}
