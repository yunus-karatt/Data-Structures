class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node

    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
    }
    if (index == 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++;

    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null
    }
    let removeNode
    if (index === 0) {
      removeNode = this.head
      this.head = this.head.next

    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
    this.size--;
    return removeNode.value
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null
    }
    if (this.head.value == value) {
      this.head = this.head.next
      this.size--;
      return value
    } else {
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next == null) {
        return 'no number exist'
      } else {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }

    }
  }

  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i=0
    let current=this.head
    while(current){
      if(current.value==value){
        return i
      }
      current=current.next
      i++
      
    }
    return -1
  }

  reverse(){
    let curr=this.head
    let prev=null
    while (curr){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next 
    }
    this.head=prev
  }

  print() {
    if (this.isEmpty()) {
      console.log('list is empty');
    } else {
      let curr = this.head;
      let listValues = '';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList();

list.append(10)
list.append(20)
list.append(30)
list.append(30)
list.append(59)
list.print()
list.reverse()
list.print()



// QS 234. Palindrome Linked List(leetcode)

// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

var isPalindrome = function(head) {
  let currnt=head
  let string1=''
  let string2=''
  while(currnt){
      string1=`${string1}${currnt.val}`
      string2=`${currnt.val}${string2}`
      currnt=currnt.next
  }
 return string1===string2?true:false;
};



//206. Reverse Linked List (leetcode)
// Given the head of a singly linked list, reverse the list, and return the reversed list.


var reverseList = function(head) {
  let current=head
  let prev=null
  while(current){
      let next=current.next
      current.next=prev
      prev=current
      current=next
  }
  head=prev
  return head
};




// 237. Delete Node in a Linked List (leetcode)

var deleteNode = function (node) {

  node.val = node.next.val
  node.next = node.next.next


};






// 19. Remove Nth Node From End of List (leetcode)

// var removeNthFromEnd = function(head, n) {
//   let fast=head
//   let slow=head
//   for(let i=0;i<n;i++){
//       fast=fast.next
//   }
//   if(!fast)
//   return head.next
//   while(fast.next){
//       fast=fast.next
//       slow=slow.next
//   }
//   slow.next=slow.next.next
//   return head
// };