// Linked List Queue

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.rear = null
  }

  enqueue(value) {
    const node = new Node(value)
    if (!this.rear) {
      this.front = node
      this.rear = node
    } else {
      this.rear.next = node
      this.rear = node
    }

  }

  dequeue() {
    if (!this.front) {
      console.error('no queue')
    } else {
      this.front = this.front.next
      if (!this.front) {
        this.rear = null
      }
    }
  }

  display() {
    let current = this.front
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }

}
// const stack=new Queue()
// stack.enqueue(1)
// stack.enqueue(2)
// stack.dequeue()
// stack.display()



// implimenatation of Queue using array

class ArrayQueue {
  constructor() {
    this.items = []
  }

  enqueue(value) {
    this.items.push(value)
  }
  dequeue() {
    this.items.shift()
  }
  peek() {
    return this.items[0]
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    return this.items.length === 0
  }
  print() {
    console.log(this.items.toString())
  }
}
// const arrayQueue= new ArrayQueue()
// console.log(arrayQueue.isEmpty())
// arrayQueue.enqueue(1)
// arrayQueue.enqueue(2)
// arrayQueue.enqueue(3)
// console.log('peek',arrayQueue.peek())
// console.log(arrayQueue.size())
// arrayQueue.dequeue()
// arrayQueue.print()

// Queue implimentaion using object
class ObjectQueue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  enQueue(element) {
    this.items[this.rear] = element
    this.rear++
  }
  deQueue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }
  isEmpty() {
    return this.rear - this.front === 0
  }
  peek() {
    return this.items[this.front]
  }
  size() {
    return this.rear - this.front
  }
  print() {
    console.log(this.items)
  }
}

// circular Queue

class CircularQueue {
  constructor(size) {
    this.item = new Array(size)
    this.capacity = size
    this.currentLength = 0;
    this.rear = -1
    this.front = -1
  }
  isFull() {
    return this.currentLength === this.capacity
  }
  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(value) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.item[this.rear] = value
      this.currentLength += 1
      if (this.front === -1) {
        this.front = this.rear
      }
    } else {
      return 'full'
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return null
    }
    const item = this.item[this.front]
    this.item[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength -= 1
    if (this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }
    return item
  }
  peek() {
    if (!this.isEmpty()) {
      return this.item[this.front]
    }else{
      return null
    }
  }
  print(){
    if (!this.isEmpty()) {
      let i
      let str=''
      for( i=this.front;i!=this.rear;i=(i+1)%this.capacity){
        str+=this.item[i]+' '
      }
      str+=this.item[i]
      return str
    }else{
      return 'Queue is empty'
    }
  }
}

const circular=new CircularQueue(5)

console.log(circular.isEmpty())
circular.enqueue(10)
circular.enqueue(20)
circular.enqueue(30)
circular.enqueue(40)
circular.enqueue(50)
console.log(circular.deQueue())
circular.enqueue(60)
console.log(circular.print())



// QS 2: circular queue implimentatioin (leet code 622)

var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k
}

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size === this.queue.length) return false;
  this.queue.push(value);
  return true
}

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false
  this.queue.shift()
  return true
}

MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1
  return this.queue[0]
}
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1
  return this.queue[this.queue.length - 1]
}
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0
}
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length
}



// QS 3: impliment stack using queue leetcode 225

var MyStack = function () {
  this.q1 = []
  this.q2 = []
}

MyStack.prototype.push = function (x) {
  while (this.q1.length != 0) {
    this.q2.push(this.q1.shift())
  }
  this.q1.push(x)
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift())
  }
}

MyStack.prototype.pop = function () {
  return this.q1.shift()
}
MyStack.prototype.top = function () {
  return this.q1[0]
}
MyStack.prototype.empty = function () {
  return this.q1.length === 0
}


class QueueStack{
  constructor(){
    this.q1=[]
    this.q2=[]
  }
  push(x){
    while(this.q1.length!=0){
      this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while(this.q2.length!=0){
      this.q1.push(this.q2.shift())
    }
  }
}





// QS 4: sliding window maximum
// Leet code 239

var maxSlidingWindow = function (nums, k) {
  const result = []
  const dequeue = []
  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] <= i - k) {
      dequeue.shift()
    }
    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop()
    }
    dequeue.push(i)

    if (i >= k - 1) {
      result.push(nums[dequeue[0]])
    }
  }
  return result
};
