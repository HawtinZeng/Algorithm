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