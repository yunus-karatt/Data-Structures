class Node{
  constructor(data){
    this.data=data
    this.children=[]
  }
}

class Tree{
  constructor(){
    this.root=null
  }

  add(data,toNodeData){
    const node=new Node(data)
    const parent=toNodeData?this.findBFS(toNodeData):null;
    if(parent){
      parent.children.push(node)
    }else{
      if(!this.root)
        this.root=node
      else
        return 'error'
    }
  }

  findBFS(data){
    const queue=[this.root];
    let _node=null;
    this.traverseBFS((node)=>{
      if(node.data==data)
          _node=node
    })
    return _node
  }
  traverseBFS(cb){
    const queue=[this.root]
    if(cb){
        while(queue.length){
          const node=queue.shift()
          cb(node)
          for(const child of node.children)
          queue.push(child)
        }
      }
  }
}

let tree=new Tree()
tree.add('node1')
console.log(tree.add('node2'))
tree.add('node3','node1')
tree.add('node4','node2')
tree.traverseBFS(node=>console.log('current node:',node))