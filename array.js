// QS 1:second latgest number
function findSecondLargest(array){
  let largest=array[0]
  let secondLargest=0
  for(let i=0;i<array.length;i++){
    if(array[i]>largest){
        secondLargest=largest

      largest=array[i]
    }else  if(array[i]>secondLargest&&array[i]!==largest){
      secondLargest=array[i]
    }
  }
  return secondLargest
}
console.log(findSecondLargest([12,35,1,10,34,1]))
console.log(findSecondLargest([10,5,10]))

function findSecondLargest(array){
  const uniqueArray=Array.from (new Set(array))
  
  uniqueArray.sort((a,b)=>b-a)
  return uniqueArray[1]
}
console.log(findSecondLargest([12,35,1,10,34,1]))
console.log(findSecondLargest([10,5,10]))

// QS 2;Rotate array by k 

function rotateArray(array,k){
  let size=array.length
  if(k>size){
    k=k%size
  }
  const rotated=array.splice(size-k,size)
  array.unshift(...rotated)
  return array
}
console.log(rotateArray([1,2,3,4,5],2))

function rotateArray(array,k){
  let size=array.length
  if(k>size){
    k=k%size
  }
  rotateArrayHelper(array,0,size-1)
  rotateArrayHelper(array,0,k-1)
  rotateArrayHelper(array,k,size-1)
  return array
}

function rotateArrayHelper(arr,left,right){
    while(left<right){
      let temp=arr[left]
      arr[left++]=arr[right]
      arr[right--]=temp
    }
}
console.log(rotateArray([1,2,3,4,5,6,7],3))




// QS3; remove duplicates from sorted array


function removeDuplicate(arr){
  for(let i=0;i<arr.length-1;i++){
      if(arr[i]===arr[i+1]){
        arr.splice(i+1,1)
        i--;
      }
    
  }
  return arr.length
}
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))


// method 2 remove duplicate


function removeDuplicate(arr){
  let i=0;
  for(let j=1;j<arr.length;j++){
    if(arr[i]!==arr[j]){
      i++
      arr[i]=arr[j]
    }
  }
  return i+1
}
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))

// Qs 5=given an integer array of nums,find the subarray with the largest sum,
//  and retrun its sum

function maxSubArray(nums){
  let maxSum=nums[0]
  for(let i=0;i<nums.length;i++){
    let currentSum=0
    for(let j=i;j<nums.length;j++){
      currentSum+=nums[j]
      if(currentSum>maxSum)
      maxSum=currentSum
    }
   
  }
  return maxSum
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

function secondMaxSubarray(nums){
  let maxSum=nums[0]
  let sum=0
  for(let i=0;i<nums.length;i++){
     sum+=nums[i]
    if(maxSum<sum){
      maxSum=sum
    }
     if(sum<0){
      sum=0
    }
    }
    return maxSum
}