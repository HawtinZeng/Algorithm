function deepEqual(target1: any, target2: any) {
  // 对于引用类型, regex, date
  if (target1 instanceof Array && target2 instanceof Array) {
    if (target1.length !== target2.length) return false;
    for (let i = 0; i <= target1.length; i++) {
      const childIsEqual = deepEqual(target1[i], target2[i]);
      if (!childIsEqual) {
        return false;
      }
    }
    return true;
  }

  if (target1 instanceof Object && target2 instanceof Object) {
    const k1s = Object.keys(target1);
    const k2s = Object.keys(target2);
    if (k1s.length !== k2s.length) return false;
    for (let i = 0; i < k1s.length; i++) {
      const k = k1s[i];
      const childIsEqual = deepEqual(target1[k], target2[k]);
      if (!childIsEqual) {
        return false;
      }
    }
    return true;
  }

  // 对于值类型  或者 某一个为值类型
  return target1 === target2;
}

// equal
const o1 = { a: 1, b: 1, c: [1, 2, 4] };
const o2 = { a: 1, b: 1, c: [1, 2, 4] };
console.log(deepEqual(o1, o2));

const a: any = []; // ===> 'abdafsdfa' ['fasdfa', '41234', {}], 非连续,, 空间
a.push("abc");
a.push({});

/**
 * 改：连续，1，非连续，N, 1
 * 删：1， N， 1
 * 查：1， N， 1
 *
 * hashTable额外空间 N, Hash化
 *
 * HashMap
 * key, value: ("abc"=> id): pointer
 *
 * ArrayHashMap.push(1234)
 * set(id, value);
 *
 * Map(id => newId)
 *
 * 插空....
 */

// equal
const o9 = 3;
const o10 = 3;
console.log(deepEqual(o9, o10));

// not equal

const o3 = { a: 1, b: 1, c: [1, 2, 4, 5] };
const o4 = { a: 1, b: 1, c: [1, 2, 4] };
console.log(deepEqual(o3, o4));

// not equal
const o5 = { a: 1, b: 1, c: [1, 2, 4, 5] };
const o6 = { a: 1, b: 1, c: [1, 2, 4], d: 7 };
console.log(deepEqual(o5, o6));

// not equal
const o7 = 1;
const o8 = 3;
console.log(deepEqual(o7, o8));
