/**
 * 腾娱互动：一面
 * 数组中对象key去重
 */
function deDuplicates(inputs: any[]) {
  const set = new Set<string>();

  const outputs: any[] = [];
  for (let i = input.length - 1; i >= 0; i--) {
    let pass = true;
    // check duplicates
    const allKeys = Object.keys(inputs[i]);
    for (let j = allKeys.length - 1; j >= 0; j--) {
      const v = inputs[i][allKeys[j]]
      const symbol = `${allKeys[j]}-${v}`;
      if (!set.has(symbol)) {
        set.add(symbol);
      } else {
        pass = false;
        break;
      }
    }
    
    if (pass) outputs.push(inputs[i]); // 一定要注意 收集 整个对象的位置
  }

  return outputs;
}

const input = [
  { k1: 1, k2: 2 },
  { k1: 1, k3: 2 },
  { k1: 2, k4: 2 },
];

console.log(deDuplicates(input));
