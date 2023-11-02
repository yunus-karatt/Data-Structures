// const array=[1,2,3,4,5]

// function binarySearch(arr,t){

//   let start=0;
//   let end=arr.length-1
//   while(start<=end){
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]===t){
//       return mid
//     }
//     if(arr[mid]>t){
//       end=mid-1
//     }else{
//       start=mid+1
//     }
//   }
//   return -1
// }
// for(let i=0;i<array.length;i++){
//   console.log(binarySearch(array,array[i]))
// }

// function recursiveBinary(arr,s,e,t){
//   let mid=Math.floor((s+e)/2)
//   if(s>e) return -1
//   if(arr[mid]==t) return mid
//   else if(arr[mid]>t) return recursiveBinary(arr,s,mid-1,t)
//   else return recursiveBinary(arr,mid+1,e,t)
// }

// for(let i=0;i<array.length;i++){
//   console.log(recursiveBinary(array,0,array.length-1,array[i]))
// }

// function returnarry(v1,v2){
//   if(v1>=v2) return []

//   const array=returnarry(v1,v2-1)
//   array.push(v2)
//   return array
// }
// console.log(returnarry(1,6))


// let a ='malayalam'
// console.log(a.slice(3,5))


// function binarySearch()

// console.log(arr.splice(2))
// const bucket=arr[0]
// console.log(bucket)

// bucket.push(10)
// console.log(arr)

// function quickSort(arr,lb,ub){
//   if(lb<ub){
//    var pivotind= partition(arr,lb,ub)
//    quickSort(arr,lb,pivotind-1)
//   quickSort(arr,pivotind+1,ub)
//   }

// }

// function partition(arr,lb,ub){
//   let pivot=arr[lb]
//   let start=lb
//   let end=ub

//   while(start<end){
//     while(arr[start]<=pivot){
//       start++
//     }
//     while(arr[end]>pivot){
//       end--;
//     }

//     if(start<end){
//       [arr[start],arr[end]]= [arr[end],arr[start]]
//     }
//   }

//   [arr[lb],arr[end]]=[arr[end],arr[lb]]
//   return end
// }
// console.log(arr)
// quickSort(arr,0,arr.length-1)
// console.log(arr)



// function bubbleSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//       }
//     }
//   }
//   return arr
// }


// function bubbleSort(arr){
//   let swapped;
//   do{
//     swapped=false
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]>arr[i+1]){
//         [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//         swapped=true
//       }
//     }
//   }while(swapped)
//   return arr
// }

// // console.log(bubbleSort(arr))


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//       let numToIns=arr[i];
//      let j=i-1
//      while(j>=0&&arr[j]>numToIns){
//       arr[j+1]=arr[j]
//       j--;
//      }
//      arr[j+1]=numToIns
//     }
//     return arr
// }
// // console.log(insertionSort(arr))

// function selectionSort(arr){
//   for(let i=0;i<arr.length-1;i++){
//     let minIndx=i
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[minIndx]>arr[j]){
//         minIndx=j
//       }
//     }
//     if(minIndx!=i){
//     [arr[i],arr[minIndx]]=[arr[minIndx],arr[i]]
//     }
//   }
//   return arr
// }

// console.log(selectionSort(arr))


// function quickSort(arr,lb,ub){
//   if(lb<ub){
//     let pivotind=partition(arr,lb,ub)
//     quickSort(arr,lb,pivotind-1)
//     quickSort(arr,pivotind+1,ub)
//   }
// }

// function partition(arr,lb,ub){
//   let pivot=arr[lb]
//   let start=lb
//   let end=ub
//   while(start<end){
//     while(arr[start]<=pivot){
//       start++
//     }
//     while(arr[end]>pivot){
//       end--
//     }
//     if(start<end)
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//   }
//   [arr[lb],arr[end]]=[arr[end],arr[lb]]
//   return end
// }
// quickSort(arr,0,arr.length-1)

// const arr=[1,2,3,3,6,5,8,9,4,5,5,5,4,5]

// const mid= Math.floor(arr.length/2)
// const leftArr=arr.slice(0,mid)
// const rightArr=arr.slice(mid)
// console.log(leftArr)
// console.log(rightArr)

// class QueueStack{
//   constructor(){
//     this.q1=[]
//     this.q2=[]
//   }
//   push(x){
//     while(this.q1.length!=0){
//       this.q2.push(this.q1.shift())
//     }
//     this.q1.push(x)
//     while(this.q2.length!=0){
//       this.q1.push(this.q2.shift())
//     }
//   }

//   pop(){
//     this.q1.shift()
//   }
// }

const arr1 = [8, 20, -2, 4, -6, 4]

// function insertionSort(arr){
//   for(let i=1;i<arr.length;i++){
//     const numberToInsert=arr[i]
//     let j=i-1
//     while(numberToInsert<arr[j]&&j>=0){
//       arr[j+1]=arr[j]
//        j--;
//     }
//     arr[j+1]=numberToInsert
//   }
// }


// function selectionSort(arr){
//   for(let i=0;i<arr.length-1;i++){
//     let k=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[k]>arr[j])
//         k=j
//     }
//     if(k!=i)
//     [arr[k],arr[i]]=[arr[i],arr[k]]
//   }
// }
// selectionSort(arr1)
// console.log(arr1)


// function mergeSort(arr) {
//   if (arr.length<2) return arr
//   let mid = Math.floor(arr.length / 2)
//   const leftArr = arr.slice(0, mid)
//   const rightArr = arr.slice(mid)
//   return join(mergeSort(leftArr), mergeSort(rightArr))
// }
// function join(leftArr, rightArr) {
//   let newArr = []
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] < rightArr[0])
//       newArr.push(leftArr.shift())
//     else
//       newArr.push(rightArr.shift())
//   }
//   return [...newArr,...leftArr,...rightArr]
// }

// const newARr=mergeSort(arr1)
// console.log(newARr)

// function quickSort(arr,lb,ub){
//   if(lb<ub){
//   let pivotIdx=partion(arr,lb,ub)
//   quickSort(arr,lb,pivotIdx-1)
//   quickSort(arr,pivotIdx+1,ub)
// }
// }

// function partion(arr,lb,ub){
//   let start=lb
//   let end=ub
//   let pivot=arr[0]
//   while(start<=end){
//     while(arr[start]<=pivot){
//       start++
//     }
//     while(arr[end]>pivot){
//       end--;
//     }
//     if(start<end){
//       [arr[start],arr[end]]=[arr[end],arr[start]]
//     }
//   }
//   [arr[lb],arr[end]]=[arr[end],arr[lb]]
//   return end
// }
// quickSort(arr1)
// console.log(arr1)


// function qucikSort(arr,lb,ub){
//   if(lb<ub){
//     const pivotIndx=partition(arr,lb,ub)
//     qucikSort(arr,lb,pivotIndx-1)
//     qucikSort(arr,pivotIndx+1,ub)
//   }
//   return 
// }

// function partition(arr,lb,ub){
//   const pivot = arr[lb]
//   let start=lb
//   let end=ub
//   while(start<end){
//     while(arr[start]<=pivot){
//       start++
//     }
//     while(arr[end]>pivot){
//       end--
//     }

//     if(start<end){
//       [arr[start],arr[end]]=[arr[end],arr[start]]
//     }
//   }
//   [arr[lb],arr[end]]=[arr[end],arr[lb]]
//   return end
// }

// const arr2 = [7,6,10,5,9,2,1,15,7]
// qucikSort(arr2,0,arr2.length-1)
// console.log(arr2)