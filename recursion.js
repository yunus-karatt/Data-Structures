// multiply using recursion

function multiply(array){
  if(array.length<=0){
    return 1
  }
  return array[array.length-1]*multiply(array.slice(0,array.length-1))
}
console.log(multiply([1,2,3,4]))



// QS 1: factorial of n

function factorial(n){
  if(n<=1) return 1

  return n*factorial(n-1)
}
console.log(factorial(4))



// QS 2: create an array with range of numbers
 
function rangeOfNumbers(start,end){
  if(end<start  ) return [];

  const numbers=rangeOfNumbers(start,end-1)
  numbers.push(end)
  return numbers
}
console.log(rangeOfNumbers(0,5))


// Qs 3; Given an integer x, return true if x is a palindrome, and false otherwise,

function isPalindrome(n) {
  const str = n.toString();
  if (str.length <= 1) {
    return true;
  }
  

  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome(12121212))


// QS 4: fibnocci Number 

function fib(n){
  if(n<2){
    return n
  }

  return fib(n-1)+fib(n-2)

}
console.log(fib(4))





// QS 5: reverse a String

function reverseString(str){
   if(str==''){
    return ''
   }
   return reverseString(str.substring(1))+str.charAt(0)
}
console.log(reverseString('yunus'))



// QS 6: Subsets
// Given an integer array nums of unique elements, return all possible subsets

function subSets(nums,i){
   let result=[]
   let temp=[]

   function subSetHelper(nums,i){
      if(i==nums.length){
        console.log('hew ',i)
        return result.push([...temp])
      }

      temp.push(nums[i])
      console.log('push',temp,i)
      
      subSetHelper(nums,i+1)
      console.log('resuly',result,i)
      temp.pop()
      console.log('pull',temp)
      subSetHelper(nums,i+1)
   }
   subSetHelper(nums,i)
   return result;
}

console.log(subSets([1,2,3],0))



