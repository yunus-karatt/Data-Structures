//  Big-0=O(n^2)=Quadratic


const arr1 = [8, 20, -2, 4, -6]


function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)
}
// 
//  bubbleSort(arr1)
//  console.log(arr1)



// QS:1 impliment Bubble sort
// Write a function to sort the given array nums in ascending order

const bubbleSort2 = (arr) => {
  const size = arr.length
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        console.log(arr)
      }
    }
  }
  return arr
}
//  const arr=bubbleSort2(arr1)
//  console.log(arr)




//  QS 2: leetcode( 75). Sort Colors

var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1])
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    }
  }
  return nums
};
