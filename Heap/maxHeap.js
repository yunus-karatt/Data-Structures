class MaxHeap{
  heap=new Array()
  constructor(arr){
    this.buildHeap(arr)
  }

  buildHeap(arr){
    this.heap=arr
    for(let i=this.parent(this.heap.length-1);i>=0;i--){
      this.shiftDown(i)
    }
  }
  shiftDown(i){
    let endIdx=this.heap.length-1
    let leftIdx=this.leftChild(i)
    while(leftIdx<=endIdx){
      let rightIdx=this.rightChild(i)
      let idxToShift;
      if(rightIdx<=endIdx&&this.heap[rightIdx]>this.heap[leftIdx]){  
          idxToShift=rightIdx
      }else{
        idxToShift=leftIdx
      }
      if(this.heap[i]<this.heap[idxToShift]){
        [this.heap[i],this.heap[idxToShift]]=[this.heap[idxToShift],this.heap[i]]
        i=idxToShift
        leftIdx=this.leftChild(i)
      }else{
        return
      }
    }
  }

  shiftUp(currIdx){
    let parentIdx=this.parent(currIdx)
    while(currIdx>0&&this.heap[parentIdx]< this.heap[currIdx]){
      [this.heap[parentIdx],this.heap[currIdx]]=[this.heap[currIdx],this.heap[parentIdx]]
      currIdx=parentIdx
      parentIdx=this.parent(currIdx)
    }
  }
  peek(){
    return this.heap[0]
  }
  remove(){
    [this.heap[0],this.heap[this.heap.length-1]]= [this.heap[this.heap.length-1],this.heap[0]]
    this.heap.pop()
    this.shiftDown(0)
  }

  insert(x){
    this.heap[this.heap.length]=x
    this.shiftUp(this.heap.length-1)
  }

  leftChild(i){
    return Math.floor((i*2)+1)
  }
  rightChild(i){
    return Math.floor((i*2)+2)
  }
  parent(i){
    return Math.floor((i-1)/2)
  }
  display(){
    for(let i=0;i<this.heap.length;i++){
      console.log(this.heap[i])
    }
  }
}

const arr=[10,5,25,3,30,22,12]
const maxHeap=new MaxHeap(arr)
maxHeap.insert(50)
// maxHeap.remove(50)
maxHeap.display()