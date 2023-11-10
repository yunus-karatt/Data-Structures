// suffix tree

class TrieNode {
  constructor() {
    this.children = new Map()
  }
}


class Trie {
  constructor() {
    this.root = new TrieNode()
    this.endsymbol = "*";
  }


  sufix(str) {
    this.populateSuffixTrie(str)
  }

  populateSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      this.insertSubstringStartingAt(i, str)
    }
  }

  insertSubstringStartingAt(i, str) {
    let node = this.root
    for (let j = i; j < str.length; j++) {
      if (!node.children.has(str[j])) {
        let newNode = new TrieNode();
        node.children.set(str[j], newNode)
      }
      node = node.children.get(str[j])
    }
    node.children.set(this.endsymbol, null)
  }

  contains(str) {
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      if (!node.children.has(str[i])) {
        return false
      }
      node = node.children.get(str[i])
    }
    return node.children.has(this.endsymbol)
  }
}

// const trie = new Trie()
// trie.sufix('mannan')
// console.log(trie.contains('annan'))


class Node {
  constructor() {
    this.keys = new Map()
    this.end = false;
    this.setEnd = () => this.end = true;
    this.isEnd = () => this.end;
  }
}

class TrieSample {
  constructor() {
    this.root = new Node()
  }

  add(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd()
      return
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node)
      return this.add(input.substr(1), node.keys.get(input[0]))
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]))
    }
  }

  isWord(word) {
    let node = this.root
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0])
        word = word.substr(1)
      }
    }
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
      true : false;
  }


  print(){
    let words=[]
    let search=(node,string)=>{
      if(node.keys.size!=0){
        for(let letter of node.keys.keys()){
          search(node.keys.get(letter),string.concat(letter));
        }
        if(node.isEnd()){
          words.push(string)
        }
      }else{
        string.length>0?words.push(string):undefined;
        return
      }
     
    }
    search(this.root,"")
    return words.length>0?words:null;
  }
}
// const myTrie=new TrieSample()
// myTrie.add('ball')
// myTrie.add('bat')
// myTrie.add('doll')
// myTrie.add('dork')
// myTrie.add('dorm')
// myTrie.add('send')
// myTrie.add('sense')
// console.log(myTrie.isWord('doll'))
// console.log(myTrie.isWord('dor'))
// console.log(myTrie.isWord('dorf'))
// console.log(myTrie.print())

