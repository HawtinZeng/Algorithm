// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
const data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];
const find = function (origin) {
  let store = JSON.parse(JSON.stringify(origin));
  Object.defineProperty(store, "orderBy", {
    configurable: true,
    value: (key, order) => {
      store.sort((a, b) => {
        if (order == "asc") return a[key] - b[key];
        else if (order === "desc") return b[key] - a[key];
      });
      return store;
    },
  });
  Object.defineProperty(store, "where", {
    configurable: true,
    value: (obj) => {
      for (const key in obj) {
        const regex = obj[key];
        store = store.filter((value) => {
          return regex.test(value[key]);
        });
      }
      return find(store);
    },
  });
  return store;
};

const result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy("userId", "desc");
const result1 = find(data).orderBy("userId", "asc").where({
  title: /\d$/,
});

console.log(result); // [ { userId: 19, title: 'title2' }, { userId: 8, title: 'title1' } ]
console.log(result1); // [ { userId: 8, title: 'title1' }, { userId: 19, title: 'title2' } ]
