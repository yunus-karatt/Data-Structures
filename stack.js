// Linked List Stack
class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}


class Stack{
  constructor(){
    this.top=null
  }

  push(value){
    const node=new Node(value)
    if(this.top){
      node.next=this.top
      this.top=node
    }else{
      this.top=node
    }
  }

  pop(){ 
    if(!this.top){
      console.log('Stack Under Flow')
    }else{
      this.top=this.top.next
    }
  }

  display(){
    let current=this.top

    while(current){
      console.log(current.value)
      current=current.next
    }
  }
}

// const stack=new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(5)
// stack.push(67)
// stack.pop()
// stack.display()




// Stack implimentation using Array


class ArrayStack{
  constructor(){
    this.items=[]
  }

  push(value){
    this.items.push(value)
  }

  pop(){
   return this.items.pop()
  }

  peek(){
    return this.items[this.items.length-1]
  }

  isEmpty(){
    return  this.items.length===0
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString())
  }
}

const stack=new ArrayStack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.isEmpty())
console.log(stack.size())
stack.pop()
console.log(stack.peek())
stack.print()


// QS 1: reverse input
// input 'the sky is blue'  output==>'blue is sky the'

function reverseWords(s){
  const splits=s.split(' ')
  const stack=[]

for(let i of splits){
  stack.push(i)
}
let finals='';
while(stack.length){
  const current=stack.pop()
  if(current){
    finals+=' '+current
  }
}
return finals.trim()
}

// console.log(reverseWords('a good example'))



// QS 2 leetcode 20

function isValid(s){
  const stack=[]
  for(let i=0;i<s.length;i++){
    const char=s[i]
    if(char==='('||char=='{'||char=='['){
      stack.push(char)
    }else if(char===')'||char=='}'||char==']'){
      if(isEmpty(stack)){
        return false
      }
     const top=stack.pop() 
     if(
      (char==')'&&top!=='(')||
      (char=='}'&&top!=='{')||
      (char==']'&&top!=='[')
      ) return false

    }
  }
  return isEmpty(stack)
}
function isEmpty(arr){
  return arr.length===0
}



// implimentation of queue using stack

class StackQueue{
  constructor(){
    this.s1=[]
    this.s2=[]
  }

  enqueue(x){
    this.s1.push(x)
  }
  dequeue(){
    while(this.s1.length!=0){
      this.s2.push(this.s1.pop())
    }
     this.s2.pop()
     while(this.s2.length!=0){
      this.s1.push(this.s2.pop())
     }
  }
  display(){
    console.log(this.s1.toString())
  }
}

const stackqueue=new StackQueue()
stackqueue.enqueue(5)
stackqueue.enqueue(2)
stackqueue.enqueue(-1)
stackqueue.dequeue()
stackqueue.display()
stackqueue.enqueue(10)
stackqueue.dequeue() 
stackqueue.display()

// Delet middle element of stack

let stackSample=[1,2,3,4,5,6]

function deleteMiddle(arr,current,size){
  if(arr.length<=0) return

  const x=arr.pop()
  console.log('pop',x,current)
  deleteMiddle(arr,current+1,size)


  if(current!=Math.floor(size/2)){
    console.log(current,x)
    arr.push(x)
  }
}

deleteMiddle(stackSample,0,stackSample.length)
console.log(stackSample)