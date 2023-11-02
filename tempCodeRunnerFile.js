function mergeSort(arr,lb,ub){
//   if(lb<ub){
//     let mid=Math.floor((lb+ub)/2)
//     mergeSort(arr,lb,mid)
//     mergeSort(arr,mid+1,ub)
//     merge(arr,lb,mid,ub)
//   }
// }
//   let newArr=[]

// function merge(arr,lb,mid,ub){
//  let i=lb
//  let j=mid+1
//  let k=lb
//  while(i<=mid&&j<=ub){
//   if(arr[i]<=arr[j]){
//     newArr[k++]=arr[i++]
//   }else{
//     newArr[k++]=arr[j++]
//   }
//  }
//  while(i<=mid){
//   newArr[k++]=arr[i++]
//  }
//  while(j<=ub){
//   newArr[k++]=arr[j++]
//  }
// // return newArr
// }