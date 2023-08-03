/*
  * in-place
  * 2 loops
  *   loop1: form left to right
  *     loop2: if(item_right exists and item > item_right) swap(item_index, item_right_index)
*/
function bubbleSort(arr) {
  const len = arr.length
  forEach((item, index) => {
    while(index + 1 < len && item > arr[index+1]) {
      arr[index] = arr[index+1]
      arr[index+1] = item
      index++
    }
  })
}
const inputArr = [3, 1, 2, 2, 1, -5]// no

/**
 * TODO:
 *  bubbleSort:
 *  quickSort
 */
bubbleSort(inputArr)
console.log(inputArr)
