const arr = [1, 2, 1, 2, 1, 6, 12, 10]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
}
function partition(arr, left, right) {
  const pivot = right
  // definition: i represent the most right smaller number, j represent the current number
  let i = left - 1
  for(let j = left; j < right; j++) {
    if (arr[j] < arr[pivot]) {
      i++
      const temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
  }
  i++
  const temp = arr[i]
  arr[i] = arr[pivot]
  arr[pivot] = temp
  return i
}