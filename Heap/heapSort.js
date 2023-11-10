class Heap {
  heap = new Array()
  constructor(arr) {
    this.buildHeap(arr)
  }

  buildHeap(arr) {
    this.heap = arr
    let n=this.heap.length-1
    for (let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i,n)
    }
  }
  
  insert(x){
    this.heap.push(x)
    this.shiftUp(this.heap.length-1)
  }

  remove(){
    this.heap[0]=this.heap.pop()
    this.shiftDown(0,this.heap.length-1)
  }
  shiftDown(i,end) {
    let left = this.getLeftChild(i)
    while (left <= end) {
      let right = this.getRightChild(i)
      let idxToShift;
      if (right <= end && this.heap[right] > this.heap[left]) {
        idxToShift = right
      } else {
        idxToShift = left
      }
      if (this.heap[i] < this.heap[idxToShift]) {
        [this.heap[i], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[i]]
        i = idxToShift
        left = this.getLeftChild(i)
      }else{
        return
      }
    }
  }

  heapSort(){
    let n=this.heap.length-1
    for(let i=n;i>=0;i--){
      [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]]
      this.shiftDown(0,i-1)
    }
  }
  shiftUp(i){
    let parent=this.getParent(i)
    while(i>0&&this.heap[parent]<this.heap[i]){
        [this.heap[parent],this.heap[i]]=[this.heap[i],this.heap[parent]]
        i=parent
        parent=this.getParent(i)
      }
  }
  display(){console.log(this.heap)}
  getParent(i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChild(i) {
    return Math.floor((i * 2) + 1)
  }
  getRightChild(i) {
    return Math.floor((i * 2) + 2)
  }
}
const arr=[15,20,7,9,30]
const maxHeap=new Heap(arr)
maxHeap.heapSort()
maxHeap.display()