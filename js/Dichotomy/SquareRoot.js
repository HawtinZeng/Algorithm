// Get square root with dichotomy
function getAns(left, right, a) {
  const mid = parseInt((left + right) / 2)
  if (mid * mid > a)
    return getAns(left, mid, a)
  else if ((mid+1) * (mid+1) > a)
    return mid
  else
    return getAns(mid, right, a)
}
const a = 90
console.log(getAns(0, a, a))
