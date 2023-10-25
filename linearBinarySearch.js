// QS 1: impliment linear search in js
// Write a function to search 'target ' in nums. if target exist return exist

function linearSearch(nums,t){
  for(let i=0;i<nums.length;i++){
    if(nums[i]==t){
      return i
    }
  }
  return -1
}

console.log(linearSearch([4,5,6,7,0,1,2],3))

// Qs 2:

function globalLinearSearch(units,target){
  let res=[]
    for(let i=0;i<units.length;i++){
    if(units[i]==target){
      res.push(i)
    }
  }
  if(res.length===0){
    return -1;
  }else{
    return res
  }
}
console.log(globalLinearSearch([0,5,6,7,0,1,0],0))



// QS 2: Binary search

function binarySearch(nums,target){
  let start=0;
  let end=nums.length-1;
  while(start<=end){
    let middle=Math.floor((start+end)/2)
    if(nums[middle]===target){
      return middle
    }
    else if(target>nums[middle]){
      
      start=middle+1
    }else{
      end=middle-1
    }
  }
  return -1

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],16))



// QS 3:
// Given an array arr of positive integers sorted in a strictly increasing order,
//  and an integer k.

// Return the kth positive integer that is missing from this array.

function missingNumber(arr,k){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<=k+count){
      count++
    }
  }
  return count+k
}






// QS 4:
// Given an array nums sorted in non-decreasing order, 
// return the maximum between the number of positive integers and the number of negative integers.

// var maximumCount = function(nums) {
//   let positive=0
//   let negative=0
//   for(let i=0;i<nums.length;i++){
//       if(nums[i]>0){
//           positive ++
//       }else if(nums[i]<0){
//           negative ++;
//       }
//   }
//   if(negative>positive){
//       return negative
//   }else{
//      return positive
//   }
// };

// function maximumCount(nums){
//   return Math.max(upperBound(nums),lowerBound(nums))
// }

// function upperBound(nums){
//   let low=0;
//   let high=nums.length-1;
//   while(low<high){
//     let mid=Math.ceil((low+high)/2);
//     if(nums[mid]<0)low=mid;
//     else high=mid-1

//   }
//   return nums[0]>=0?0:low+1
// }

// function lowerBound(nums){
//   let low=0;
//   let high=nums.length-1;
//   while(low<high){
//     let mid=Math.floor((low+high)/2);
//     if(nums[mid]>0)high=mid;
//     else low=mid-1

//   }
//   return nums[nums.length-1]<=0?0:nums.length-low
// }

// Qs 5: cieling

// function findCieling(arr,t){
//   let start=0;
//   let end = arr.length-1

//   while (start<=end){
//      let mid=Math.floor((start+end)/2)
//      if(arr[mid]==t){
//       return arr[mid]
//      }
//      if(arr[mid]<t){
//       start=mid+1
        
//      }else {
//       end=mid-1
//      }
//   }
//   return arr[start]
// }

// console.log(findCieling([1,2,3,5,6,8,10],4))




// Qs 6:  Find Smallest Letter Greater Than Target  leetcode(744.)


// var nextGreatestLetter = function(letters, target) {
//   let start=0
//   let end= letters.length-1
 
//   while(start<=end){
//        let mid= Math.floor((start+end)/2)
//       if(letters[mid]>target){
//           end=mid-1
//       }else {
//           start=mid+1
//       }
//   }
//   if(letters[start]){
//       return letters[start]
//   }else{
//       return letters[0]
//   }
// };







