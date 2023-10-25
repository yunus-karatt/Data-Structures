class Node{
  constructor(value){
    this.prev=null
    this.value=value
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
  }

  add(value){
    const node= new Node(value)
    if(!this.head){
      this.head=node
    }else{
      this.tail.next=node
      node.prev=this.tail
    }
    this.tail=node
  }
  print(){
    let temp=this.head
    let nodeListValues=''
    while(temp){
      nodeListValues+=`${temp.value} `
      temp=temp.next

    }
    console.log(nodeListValues)
  }
  reversePrint(){
    let temp=this.tail
    let nodeListValues=''
      while(temp){
        nodeListValues+=`${temp.value} `
        temp=temp.prev
      }
      console.log(nodeListValues)
  }

}

const list=new LinkedList()
list.add(5)
list.add(2)
list.add(3)
list.add(55)
list.print()
list.reversePrint()