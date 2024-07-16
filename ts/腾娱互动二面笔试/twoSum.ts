/**
 * 二、两个大数相加。
说明：
1、是整数；
2、两个数无限大，long都装不下；
3、不能用BigInteger；
4、不能用任何包装类提供的运算方法；
5、两个数都是以字符串的方式提供。

输入：两个字符串
输出：两个字符串

两个数字字符串相加
 */

function bigNumberSum(a: string, b: string) {
  const aArr = a.split("").reverse(),
    bArr = b.split("").reverse();

  let cur = 0,
    stage = 0;
  const sum: string[] = [];
  while (cur < aArr.length && cur < bArr.length) {
    const everySum = Number(aArr[cur]) + Number(bArr[cur]) + stage;
    sum[cur] = (everySum % 10).toString();
    stage = Math.floor(everySum / 10);
    cur++;
  }

  while (cur < aArr.length) {
    const everySum = Number(aArr[cur]) + stage;
    sum[cur] = (everySum % 10).toString();
    stage = Math.floor(everySum / 10);
    cur++;
  }

  while (cur < bArr.length) {
    const everySum = Number(bArr[cur]) + stage;
    sum[cur] = (everySum % 10).toString();
    stage = Math.floor(everySum / 10);
    cur++;
  }

  if (stage !== 0) {
    sum[cur] = stage.toString();
  }

  return sum.reverse().join("");
}

// test case
console.log(bigNumberSum("1234", "41241234") === (1234 + 41241234).toString());
console.log(
  bigNumberSum("116811111111", "567767676") ===
    (116811111111 + 567767676).toString()
);
console.log(
  bigNumberSum("1234213489189898", "923421348989898") ===
    (1234213489189898 + 923421348989898).toString()
);
