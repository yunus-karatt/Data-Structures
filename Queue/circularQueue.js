class CircularQueue{
  constructor(n){
     this.items=new Array(n)
     this.capacity=n
     this.front=-1
     this.rear=-1
    }

    enqueue(x){
      if(this.front==-1&&this.rear==-1){
        this.front++
        this.rear++
        this.items[this.rear]=x
      }
      else if((this.rear+1)%this.capacity===this.front){
        return 'Queue overFlow'
      }else{
        this.rear=(this.rear+1)%this.capacity
        this.items[this.rear]=x
      }
    }

    dequeue(){
      if(this.front==-1&&this.rear==-1){
        return 'Queue underflow'
      }
      else if(this.front==this.rear){
        this.items[this.front]==null
        this.front=-1
        this.rear=-1
      }else{
        this.front=(this.front+1)%this.capacity
      }
    }
    display(){
      if(this.front==-1&&this.rear==-1){
        return 'Queue Under Flow'
      }else{
        let i=this.front
       while(i!=this.rear){
        console.log(this.items[i])
        i=(i+1)%this.capacity
       }
       console.log(this.items[i])
      }
    }
}

const circularQueue=new CircularQueue(5)
circularQueue.enqueue(2)
circularQueue.enqueue(-1)
circularQueue.enqueue(5)
circularQueue.enqueue(6)
circularQueue.enqueue(7)
console.log(circularQueue.enqueue(10))
// circularQueue.display()
 circularQueue.dequeue()
 circularQueue.dequeue()
 circularQueue.enqueue(10)

 circularQueue.display()





//  Circular Queue 


