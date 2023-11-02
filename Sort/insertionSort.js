// Best case=O(n) T
// worst and avg=O(n^2)T
// O(1)S

const arr1 = [8, 20, -2, 4, -6,4]
function insertionSort(arr) {
  
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1;
    while(j>=0&&numberToInsert<arr[j]){
      arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=numberToInsert
  }
}
insertionSort(arr1)
console.log(arr1)

// Qs:1 impliment insertion sort

function insertionSort1(arr){
   for(let i=1;i<arr.length;i++){
    let current =arr[i]
    let j=i-1
    while(j>=0&&arr[j]>current){
        arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=current
   }
   return arr
}

insertionSort1(arr1)
console.log(arr1)