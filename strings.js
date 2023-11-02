//  QS 1
// Truncate the text


function truncate(str,maxlength){
  if(str.length>maxlength){
   return str.slice(0,maxlength)+'...'
  }else{
    return str
  }
}

console.log(truncate('Subscribe to roadsidecoder',9))

// QS 2
// palindrom

function palindrom(string) {
  const s = string.split('').reverse().join('')
  if (s === string)
    return true
  else
   return false
}
// console.log(palindrom('asdffdsaaa'))

// Qs 3 :hamming Distance

function hammingDistance(str1,str2){
    let count=0
    for(let i=0;i<str2.length;i++){
      if(str1[i]!==str2[i])
      count++
    }
    return count
}

// console.log(hammingDistance('jkl;',"asdf"))

// QS 4 :anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1
      obj2[t[i]] = (obj2[t[i]] || 0) + 1
  }

  for(const key in obj1){

      if(obj1[key]!==obj2[key]) return false
  }
  return true
}

// console.log(isAnagram('rats','tara'))

