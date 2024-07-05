const ref = new Map(); // k, v, old, new
function deepClone(target: any) {
  if (target instanceof Array) {
    const clonedData: any[] = [];
    target.forEach((v, i) => {
      clonedData[i] = deepClone(v);
    });
    ref.set(target, clonedData);
    return clonedData;
  }

  // 跳过函数
  // if (target instanceof Function) {
  //   return null;
  // }

  // // 正则 和 Date
  // if (target instanceof RegExp) {
  // }

  // if (target instanceof Date) {
  // }

  if (target instanceof Object) {
    // console.log(ref);
    if (ref.has(target)) {
      const existRef = ref.get(target);

      return existRef;
    }
    const clonedData = {};
    ref.set(target, clonedData);

    Object.keys(target).forEach((k) => {
      clonedData[k] = deepClone(target[k]);
    });
    return clonedData;
  } else {
    return target;
  }
}

//vue2, => this.setState(xxx), definedProperty(k, (getter), setter), vue3, proxy(),
// scss-style-loader, minify, xxx, stlyelint-wepack-, vue-plugin, ts-plugin,

// vite, styelint, onHotUpdate, vite, xxxxx,

// vite, dependency, pre bundle, xxx,
// dev server: module，

// esbuild, go,

// rolldown,,

const test2 = { a: [1, 2, 3, 4], b: 2 };
(test2 as any).test2 = test2;

console.log(deepClone(test2));
console.log(deepClone(test2) === test2);

export {};
