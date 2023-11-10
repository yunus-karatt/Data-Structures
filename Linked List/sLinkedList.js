class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addNode(value) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  delete(value) {
    let temp = this.head
    let prev
    if (temp && temp.value == value) {
      this.head = temp.next
      return
    }
    while (temp !== null && temp.value !== value) {
      prev = temp
      temp = temp.next
    }

    if (temp == null) {
      console.log('no number exist')
      return
    }
    if (temp === this.tail) {
      this.tail = prev
      this.tail.next = null
      return
    }
    prev.next = temp.next

  }

  insertAfter(nextTo, value) {
    const node = new Node(value)
    let temp = this.head;

    if (this.tail.value == nextTo) {
      this.tail.next = node
      this.tail = node
      return
    }
    if (this.head.value == nextTo) {
      node.next = this.head.next
      this.head.next = node
      return
    }

    while (temp && temp.value !== nextTo) {
      temp = temp.next
    }

    if (!temp) {
      console.log('no nextTofind')
      return
    }
    node.next = temp.next
    temp.next = node


  }

  removeDupli() {
    let currnt = this.head
    while (currnt) {
      let next = currnt.next
      while (next && next.value === currnt.value) {
        next = next.next
      }
      currnt.next = next
      if (next == this.tail && currnt.value == next.data) {
        this.tail = currnt
        this.tail.next = null
      }
      currnt = next
    }
  }

  reverse() {
    let curr = this.head
    let prev = null
    let next
    while (curr) {
       next = curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.tail=this.head
    this.head=prev
  }

  display() {
    if (this.head == null) {
      console.log('empty linked list')
      return
    }
    let temp = this.head
    let linkedListValues = ''
    while (temp !== null) {
      linkedListValues += `${temp.value} `
      temp = temp.next
    }
    console.log(linkedListValues)
  }

}

const linkedList = new LinkedList()
linkedList.display()
linkedList.addNode(10)
linkedList.addNode(20)
linkedList.addNode(30)
linkedList.addNode(40);
linkedList.addNode(50)
linkedList.display()
linkedList.reverse()
linkedList.display()

