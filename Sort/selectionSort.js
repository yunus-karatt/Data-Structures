// O(n^2)T O(1)s

function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]]
      }
    }
  }
  return arr
}

const arr1 = [5,4,3,2,1,1]

console.log(selectionSort(arr1))


// QS 1;

function selectionSort1(arr){
  for(let i=0;i<arr.length-1;i++){
    let minIndx=i
    for(let j=i+1;j<arr.length;j++){
      if(arr[minIndx]>arr[j]){
        minIndx=j
      }
    }
    if(minIndx!=i){
      [arr[i],arr[minIndx]]=[arr[minIndx],arr[i]]
    }
  }
  return arr
}
console.log(selectionSort1(arr1))