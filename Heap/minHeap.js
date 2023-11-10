class MinHeap {

  heap = new Array()

  constructor(arr) {
    this.buildHeap(arr)
  }

  buildHeap(arr) {
    this.heap = arr
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shifDown(i)
    }
  }

  shifDown(currI) {
    let endI = this.heap.length - 1
    let leftI = this.leftChild(currI)
    while (leftI <= endI) {
      let rightI = this.rightChild(currI)
      let idxToShift;
      if (rightI <= endI && this.heap[rightI] < this.heap[leftI]) {
        idxToShift = rightI
      } else {
        idxToShift = leftI
      }
      if (this.heap[currI] > this.heap[idxToShift]) {
        [this.heap[currI], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[currI]]
        currI = idxToShift
        leftI = this.leftChild(currI)
      } else {
        return
      }
    }
  }

  shiftUp(currI) {
    let parentI = this.parent(currI)
    while (currI > 0 && this.heap[parentI]>this.heap[currI]) {
      [this.heap[currI], this.heap[parentI]] = [this.heap[parentI], this.heap[currI]]
      currI=parentI
      parentI=this.parent(currI)
    }
  }

  peek(){
    return this.heap[0]
  }

  remove(){
    [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
    this.heap.pop()
    this.shifDown(0)
  }

  insert(x){
    this.heap.push(x)
    this.shiftUp(this.heap.length-1)
  }

  parent(i) {
    return Math.floor((i - 1) / 2)
  }

  leftChild(i) {
    return Math.floor((i * 2) + 1)
  }

  rightChild(i) {
    return Math.floor((i * 2) + 2)
  }

  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i])
    }
  }

}
const arr = [6, 2, 8]
const heap = new MinHeap(arr)
heap.insert(1)
heap.insert(5)
heap.insert(15)
heap.remove()
console.log('peeek',heap.peek())
heap.display()