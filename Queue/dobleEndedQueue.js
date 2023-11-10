class doubleEndedQueue{
  constructor(size){
    this.items=new Array(size)
    this.front=-1
    this.rear=-1
    this.size=size
  }

  enqueueFront(x){
    if(this.front==-1&&this.rear===-1){
      this.front=0
      this.rear=0
      this.items[this.front]=x
    }else if((this.rear+1)%this.size===this.front){
      console.log( 'queue OverFlow')
    }else if(this.front===0){
      this.front=this.size-1
      this.items[this.front]=x
    }else{
      this.front--
      this.items[this.front]=x
    }
  }
  enqueueRear(x){
    if(this.front==-1&&this.rear===-1){
      this.front=0
      this.rear=0
      this.items[this.rear]=x
    }else if((this.rear+1)%this.size===this.front){
      console.log( 'queue OverFlow')
    }else if(this.rear===this.size-1){
      this.rear=0
      this.items[this.rear]=x
    }else{
      this.rear++
      this.items[this.rear]=x
    }
  }
  dequeueFront(){
    if(this.front==-1&&this.rear==-1){
      console.log('Queue Under Flow')
    }else if(this.front===this.rear){
        this.front=-1
        this.rear=-1
    }else{
      this.front=(this.front+1)%this.size
    }
  }

  dequeueRear(){
    if(this.front==-1&&this.rear==-1){
      console.log('Queue Under Flow')
    }else if(this.front===this.rear){
        this.front=-1
        this.rear=-1
    }else if(this.rear==0){
      this.rear=this.size-1
    }else{
      this.rear--;
    }
  }

  display(){
    let i=this.front
    while(i!==this.rear){
       console.log(this.items[i])
       i=(i+1)%this.size
    }
    console.log(this.items[i])
  }
}

const doubleEnd=new doubleEndedQueue(5)
doubleEnd.enqueueFront(2)
doubleEnd.enqueueFront(5)
doubleEnd.enqueueRear(-1)
doubleEnd.enqueueRear(0)
doubleEnd.enqueueFront(7)
doubleEnd.enqueueRear(4)
doubleEnd.dequeueFront()
doubleEnd.dequeueRear()
doubleEnd.dequeueFront()
doubleEnd.display()