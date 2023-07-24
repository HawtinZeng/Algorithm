const arr = [1, 2, 1, 2, 1, 6, 12, 10]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot)
    quickSort(arr, pivot+1, right)
  }
}
function partition(arr, left, right) {
  const pivot = arr[left]
  while (true) {
    while (arr[left] < pivot) {
      left++
    }
    while (arr[right] > pivot) {
      right--
    }
    if (left >= right) return right
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
}