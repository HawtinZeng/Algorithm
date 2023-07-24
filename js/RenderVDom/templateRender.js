function templateRender(tpl, data) {
  // determine the '{}' number and data property number, they are equal
  // string.replace
  const reg = /{.+?}/g
  let position = 0
  // res.exec excute regex from reg.lastIndex
  while ((reg.exec(tpl)) !== null) {
    position++
  }
  const tplDataName = Object.keys(data)
  if (tplDataName.length === position) {
    tplDataName.forEach((property) => {
      tpl = tpl.replace(`{${property}}`, data[property])
    })
    return tpl
  } else {
    return "Error"
  }
}
const tpl = "你好，我是{company}, 我的部门是{department}"
const tplData = {
  company: "Alibaba",
  department: "Front End"
}
console.log(templateRender(tpl, tplData))
// regex.exec() would match once every call, use lazy mode instead of greedy mode...
// Allert the Object.keys(obj) returns an array of property, not just one property...