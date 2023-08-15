/**
 http://ionicabizau.net/blog&username=jim
 * protocol:
 * domain:
 * path:
 * query:
 * 
 * Dynamic Regex search: there is a specific regex content for each stage.
 * LastIndex.
 */
const str = 'http://ehll.ionicabizau.net/blog?username=jim&time=8PM&'
const regex = new RegExp('(\.\+)://(\.\+)/(\.\+)\\?', 'g') // for the next loop: \.\+=\.\+
const regexRes = regex.exec(str)
const res = {
  protocol: regexRes[1],
  domain: regexRes[2],
  path: regexRes[3],
  query: {}
}
/**
 * {
    * protocol:
    * domain:
    * path:
    * query:{
    *   name1: value1,
    *   name2: value2
    * }
 * }
 */
const regexForQuery = new RegExp('(\.\+?)=(\.\+?)&', 'g')
regexForQuery.lastIndex = regex.lastIndex
let resForQuery
while ((resForQuery = regexForQuery.exec(str + '&')) !== null)
  res.query[resForQuery[1]] = resForQuery[2]
console.log(res)
/**
 * Notes:
 * 1. use exec to exract the non-repeated parts. 2. we can use while exec to exract the repeated parts.when we exect the second regex.exec. 3. we can make use of the lastIndex of the first RegExp.we can add some helper string to satisfy our regex match.
 */
