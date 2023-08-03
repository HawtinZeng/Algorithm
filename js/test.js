/**
 * 给定任意正整数 x，不使用系统math函数，计算并返回 x 的平方根的整数部分
 * floor?
 */
function getAns(left, right, a) {
  const mid = parseInt((left + right) / 2)
  if (mid * mid > a)
    return getAns(left, mid, a)
  else if ((mid+1) * (mid+1) > a)
    return mid
  else
    return getAns(mid, right, a)
}
const a = 5
console.log(getAns(0, a, a))
