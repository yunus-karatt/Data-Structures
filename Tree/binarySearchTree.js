
class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null
  }

  isEmpty(){
    return this.root===null
  }

  insert(x){
    const newNode= new Node(x)
    if(this.isEmpty()){
      this.root=newNode
    }else{
         this.insertNode(this.root,newNode)
    }
  }
  insertNode(root,newNode){
    if(newNode.value<root.value){
      if(root.left===null){
        root.left=newNode
      }else{
        this.insertNode(root.left,newNode)
      }
    }else{
      if(root.right===null){
        root.right=newNode
      }else{
        this.insertNode(root.right,newNode)
      }
    }
  }

  search(root,value){
    if(!root){
      return false
    }else{
      if(root.value==value){
        return true
      }
      else if( value<root.value){
       return this.search(root.left,value)
      }else{
        return this.search(root.right,value)
      }
    }
  }

  preOrder(root){
    if(root){
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }
  levelOrder(){
   const queue=[]
   queue.push(this.root)
   while(queue.length){
    let curr=queue.shift()
    console.log(curr.value)
    if(curr.left){
      queue.push(curr.left)
    }
    if(curr.right){
      queue.push(curr.right)
    }
   }
  }

  min(root){
    if(!root.left){
      return root.value
    }else{
     return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }
  delete(x){
   this.deleteNode(this.root,x)
  }
  deleteNode(root,x){
    if(root==null){
      return root
    }
    if(x<root.value){
      root.left=this.deleteNode(root.left,x)
    }else if(x>root.value){
      root.right=this.deleteNode(root.right,x)
    }else{
      if(!root.left&&!root.right){
        return null
      }
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.value=this.min(root.right)
      this.deleteNode(root.right,root.value)
    }
    // return root
  }
}
const bst=new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.levelOrder()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.levelOrder()
// bst.delete(10)
// bst.levelOrder()

class SampleNode{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}

class SampleNodeBST{
  constructor(){
    this.root=null
  }

  insert(value){
    let curr=this.root
    if(!this.root){
      this.root=new Node(value)
      return
    }
    while(true){
      if(value<curr.value){
        if(curr.left===null){
          curr.left=new Node(value)
          break;
        }else{
          curr=curr.left
        }
      }else{
        if(curr.right===null){
          curr.right=new Node(value)
          break;
        }else{
          curr=curr.right
        }
      }
    }
  }

  contains(value){
    let curr=this.root
    while(curr!==null){
      if(value<curr.value){
        curr=curr.left
      }else if(value>curr.value){
        curr=curr.right
      }else{
        return true
      }
    }
    return false
  }

  remove(value){
    this.removeHelper(value,this.root,null)
  }

  removeHelper(value,currNode,parentNode){
    while(currNode ){
      if(value<currNode.value){
        parentNode=currNode
        currNode=currNode.left
      }else if(value>currNode.value){
        parentNode=currNode
        currNode=currNode.right
      }else{
        if(currNode.left!=null&&currNode.right!=null){
         currNode.value= this.getMin(currNode.right)
         this.removeHelper(currNode.value,currNode.right,currNode)
        }
        else{
          if(parentNode==null){
            if(currNode.right==null){
              this.root=currNode.left
            }else{
              this.root=currNode.right
            }
          }else{
            if(parentNode.left==currNode){
              if(currNode.right==null){
                parentNode.left=currNode.left
              }else{
                parentNode.left=currNode.right
              }
            }else{
              if(currNode.right==null){
                parentNode.right=currNode.left
              }else{
                parentNode.right=currNode.right
              }
            }
          }
        }
        break;
      }
    }
  }

  getMin(root){
    if(root.left==null){
      return root.value
    }else{
      return this.getMin(root.left)
    }
  }

  inOrder(){
    this.inOrderHelper(this.root)
  }

  inOrderHelper(node){
    if(node!=null){
      this.inOrderHelper(node.left)
      console.log(node.value)
      this.inOrderHelper(node.right)
    }
  }

  preOrder(){
    this.preOrderHelper(this.root)
  }

  preOrderHelper(node){
    if(node){
      console.log(node.value)
      this.preOrderHelper(node.left)
      this.preOrderHelper(node.right)
    }
  }

  postOrder(){
    this.postOrderHelper(this.root)
  }

  postOrderHelper(node){
    if(node){
      this.postOrderHelper(node.left)
      this.postOrderHelper(node.right)
      console.log(node.value)
    }
  }

  findClosest(value){
    let curr=this.root
    let closest=curr.value
    while(curr){
      if(Math.abs(value-closest)>Math.abs(value-curr.value)){
        closest=curr.value
      }
      if(value<curr.value){
        curr=curr.left
      }else if(value>curr.value){
        curr=curr.right
      }else{
        break
      }
    }
    return closest
  }
   BFS(){
    let currNode=this.root
    let results=[]
    let queue=[this.root]
    while(queue.length){
       currNode=queue.shift()
       results.push(currNode.value)
      if(currNode.left) queue.push(currNode.left)
      if(currNode.right) queue.push(currNode.right)
    }
  return results
   }

}

const sBst=new SampleNodeBST()
sBst.insert(47)
sBst.insert(21)
sBst.insert(76)
sBst.insert(18)
sBst.insert(27)
sBst.insert(52)
sBst.insert(82)
// console.log(sBst.findClosest(11))
sBst.preOrder()
// console.log()
// sBst.postOrder()
// console.log(sBst.BFS())

// sBst.insert(45)
// sBst.insert(12)
// sBst.insert(50)
// sBst.insert(10)
// sBst.remove(45)
// sBst.preOrder()