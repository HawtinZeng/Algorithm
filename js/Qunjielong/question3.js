// Start at 11:08 AM 8/9/2023.
// End at 12:15 AM 8/9/2023.
/**
 * Analysis:
 * 1. split path string.
 * 2. get the value one by one property.
 * 3. out when the value is not a Object.
 */
const deepGet = (obj, prop) => {
  const propsArray = prop.split('.')
  let currentObject = obj
  // loop props array
  for (let i = 0; i < propsArray.length; i++) {
    // satisfy getting array value with []
    const item = propsArray[i]
    // regex test
    const matchAllres = [...item.matchAll(/\[(\d+)\]/g)]
    if(matchAllres.length > 0) {
      const stringProp = item.slice(0, item.indexOf('['))
      currentObject = currentObject[stringProp]
      for (let j = 0; j < matchAllres.length; j++) {
          const index = parseInt(matchAllres[j][1])
          if (index !== NaN)
            currentObject = currentObject[index]
          else
            currentObject = currentObject[matchAllres[j][0]]
      }
    } else {
      currentObject = currentObject[item]
    }
    if (typeof currentObject === 'object') { // for Array and Object.
      continue
    } else {
      return currentObject
    }
  }
}

// test
const test1 = deepGet({
  school: {
    student: { name: 'Tomy' },
  },
}, 'school.student.name') // => 'Tomy'

const test2 = deepGet({
  school: {
    students: [
      { name: 'Tomy' },
      { name: 'Lucy' },
    ],
  }
}, 'school.students[1].name') // => 'Lucy'

// // 对于不存在的属性，返回 undefined
const test3 = deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
const test4 = deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined



// 补充测试: 多层数组嵌套
const test5 = deepGet({
  school: {
    students: [
      { name: 'Tomy' },
      [
        {name: 'Kitty'},
        {name: 'Jim'}
      ]
    ],
  }
}, 'school.students[1][0].name') // => Kitty
console.log(test1, test2, test3, test4, test5)
