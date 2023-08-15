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