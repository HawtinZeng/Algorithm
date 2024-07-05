/**
 * 数组，长度不定，n数积
 * [2,2,1,4,5,-1]
 * 一正两负 V
 * 三正 V
 * 三负 X
 * 两正一负 X
 *
 * add: [] ,minus: []
 * 四种情况的最大值
 * answ1: biggest abs
 * answ2: biggest3
 * answ3: smallest;
 * answ4: smallest;
 */
function solveThreeMultiply(arr: number[]) {
  const add: number[] = [],
    minus: number[] = [],
    zero: number[] = [];

  arr.forEach((num) => {
    if (num > 0) {
      add.push(num);
    } else if (num < 0) {
      minus.push(num);
    } else {
      zero.push(num);
    }
  });

  add.sort((a, b) => a - b);
  minus.sort((a, b) => a - b);

  let answ1: number = -Infinity,
    answ2: number = -Infinity,
    answ3: number = -Infinity,
    answ4: number = -Infinity;

  if (minus.length >= 2 && add.length >= 1) {
    answ1 = add[add.length - 1] * minus[0] * minus[1];
  }

  if (add.length >= 3) {
    answ2 = add[add.length - 1] * add[add.length - 2] * add[add.length - 3];
  }

  if (minus.length >= 3) {
    answ3 =
      minus[minus.length - 1] *
      minus[minus.length - 2] *
      minus[minus.length - 3];
  }

  if (minus.length >= 1 && add.length >= 2) {
    answ4 = add[0] * add[1] * minus[minus.length - 1];
  }
  const candidates = [answ1, answ2, answ3, answ4];
  if (zero.length > 0) {
    candidates.push(0);
  }

  console.log(candidates);
  return candidates.reduce((ans, c) => Math.max(ans, c), answ1);
}

const test2: number[] = [1, -2, 3, 4, -5];
console.log(solveThreeMultiply(test2));

const test3: number[] = [-1, 2, -3, -4, -5];
console.log(solveThreeMultiply(test3));
