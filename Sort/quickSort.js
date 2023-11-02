function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let letf = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      letf.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(letf), pivot, ...quickSort(right)]
}

console.log(quickSort(arr1))

// Worst case complexity O(n^2)
// average case complexity o(n log n)


// Qs 1: Qucik sort

function quickSort1(arr) {
  quickSortHelper(arr, 0, arr.length - 1)
  return arr

}

function quickSortHelper(arr, start, end) {
  if (start >= end) return arr

  let pivotIdx = start
  let letfIdx = start + 1
  let rightIdx = end

  while (letfIdx <= rightIdx) {
    if (arr[letfIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      swap(arr, letfIdx, rightIdx)
      letfIdx++;
      rightIdx--;
    }
    if (arr[letfIdx] <= arr[pivotIdx]) letfIdx++;
    if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--;
  }
  swap(arr, rightIdx, pivotIdx)
  quickSortHelper(arr, start, rightIdx - 1)
  quickSortHelper(arr, rightIdx + 1, end)
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
console.log(quickSort1(arr1))


const arr1 = [8, 20, -2, 4, -6, 8]
 
function quickSort(arr) {
  let pivot = arr[0]
  let right = [];
  let left = []

  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot)
      left.push(arr[i])
    else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}


function quickSort2(){
  let arr=[5,4,3,2,1]
sort(arr,0,arr.length-1)
return  arr
}
function sort(nums,low,hi){
  if(low>=hi) return

  let start=low
  let end=hi
  let mid=Math.floor((start+end)/2)
  let pivot=nums[mid]

  while(start<=end){
    while(nums[start]<pivot){
      start++
    }
    while(nums[end]>pivot){
      end --; 
    }

    if(start<=end){
      [nums[start],nums[end]]=[nums[end],nums[start]]
      start++
      end--;
    }
    sort(nums,low,end)
    sort(nums,start,hi)

  }
}

console.log(quickSort2())








