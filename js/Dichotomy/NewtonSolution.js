function getAns(x, a) {
  // (2x + N) / (x * x) = nextX
  if (x * x - a < 1) return x
  else return getAns(parseInt((x * x + a) / (2 * x)), a)
}
// x => (x*x + a)/(2*x) = 
const a = 90
console.log(getAns(a, a))
