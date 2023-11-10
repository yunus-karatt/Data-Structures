class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }
  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)

    // this.table[index]=value

    let bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKey = bucket.find(item => item[0] === key)
      if (sameKey) {
        sameKey[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }

  get(key) {
    const index = this.hash(key)
    // return this.table[index]
    const bucket = this.table[index]
    if (bucket) {
      const sameKey = bucket.find(item => item[0] === key)
      if (sameKey) {
        return sameKey[1]
      }
    }
    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    // this.table[index]=undefined
    const bucket = this.table[index]
    if (bucket) {
      const sameKey = bucket.find(item => item[0] === key)
      if (sameKey) {
        bucket.splice(bucket.indexOf(sameKey), 1)
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}

const table = new HashTable(50)

table.set('name', 'yunus')
table.set('age', 37)
table.set('mane', 'karatt')
table.set('name', 'yunussss')
table.remove('mane')
table.display()

// table.display()



class HashTableSameple{
  constructor(n){
    this.table=new Array(n)
    this.size=size
  }

  hash(key){
    let sum=0
    for(let i=0;i<key.length;i++){
      sum+=key.charCodeAt(i)
    }
    return sum%this.size
  }

  set(key,value){
    const indx=this.hash(key)
    const bucket=this.table[indx]
    if(bucket){
      const sameValue=bucket.find(item=>item[0]===key)
      if(sameValue){
        sameValue[1]=value
      }else{
        bucket.push([key,value])
      }
    }else{
      this.table[indx]=[[key,value]]
    }
  }
  get(key){
    const index=this.hash(key)
    const bucket=this.table[index]
    if(bucket){
      const sameKey=bucket.find(item=>item[0]===key)
      if(sameKey)
      return sameKey[1]
    }
    return undefined
  }

  remove(key){
    const index=this.hash(key)
    const bucket=this.table[index]
    if(bucket){
      const sameKey=bucket.find(item=>item[0]===key)
      if(sameKey){
        bucket.splice(bucket.indexOf(sameKey),1)
      }
    }
  }
}