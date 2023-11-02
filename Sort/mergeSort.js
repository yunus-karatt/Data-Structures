function mergeSort(arr){
   if(arr.length<=1){
    return arr
   }
   let midInd=Math.floor(arr.length/2)
   let firstHalf=arr.slice(0,midInd)
   let secondHalf=arr.slice(midInd)
   

   
   
   return join(mergeSort(firstHalf),mergeSort(secondHalf))
}
function join(firstHalf,secondHalf){
  let newArr=[]
  let i=0;
  let j=0;

  while(i<firstHalf.length&&j<secondHalf.length){
    if(firstHalf[i]<=secondHalf[j]){
      newArr.push(firstHalf[i++])
      
    }else{
      newArr.push(secondHalf[j++]);
      
    }
  }
  while(i<firstHalf.length){
    newArr.push(firstHalf[i++])

  }
  while(j<secondHalf.length){
    newArr.push(secondHalf[j++]);

  }
  return newArr
}






const arr1 = [30,2,41,56,12,11,22,41]

// console.log(mergeSort(arr1))


function mergeSort1(arr){
if(arr.length<2) return arr
let mid=Math.floor(arr.length/2)
const leftArr=arr.slice(0,mid)
const rightArr=arr.slice(mid)
return join(mergeSort(leftArr),mergeSort(rightArr))
}


function join(leftArr,rightArr){
  // console.log(leftArr)
  let newArr=[]
  while(leftArr.length&&rightArr.length){
    
    if(leftArr[0]<=rightArr[0])
    newArr.push(leftArr.shift())
    else
    newArr.push(rightArr.shift())
  }

 return [...newArr,...leftArr,...rightArr]
}

console.log(mergeSort1(arr1))








