// Adjacency matrix
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
]

// Adjjacency List Representation

adjacencyList = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B']
}





class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1)
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    )
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return
    }

    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v)
    }
    delete this.adjacencyList[vertex]
  }
}
// const graph = new Graph()

// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')

// graph.addEdge('A', 'B')
// graph.addEdge('B', 'C')

// graph.removeVertex('A')

// graph.display()















class SampleGraph {
  constructor() {
    this.map = {}
  }

  addVertex(value) {
    this.map[value] = new Set()
  }

  insert(vertex, edge, isBidirectional) {
    if (!this.map[vertex]) {
      this.addVertex(vertex)
    }
    if (!this.map[edge]) {
      this.addVertex(edge)
    }
    this.map[vertex].add(edge)
    if (isBidirectional) {
      this.map[edge].add(vertex)
    }
  }

  removeEdge(v1,v2){
    this.map[v1].delete(v2)
    this.map[v2].delete(v1)
  }
  removeVertex(v1){
    for(const key in this.map){
      if(this.map[key].has(v1)){
        this.map[key].delete(v1)
      }
    }
    delete this.map[v1]
  }
  display() {
    for (let x in this.map) {
      console.log(x + ' -> ' + [...this.map[x]])
    }
  }
}

const graph = new SampleGraph()
// graph.insert(3, 5, true)
// graph.insert(3, 4, true)
// graph.insert(5, 6, false)
// graph.removeVertex(3)
// graph.display()


// QS
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];
class TraverseGarph{
  constructor(){
    this.adjacencyList=new Map()
  }


  addNode(airport){
    this.adjacencyList.set(airport,[])
  }
  addEdge(origin,destination){
    this.adjacencyList.get(origin).push(destination)
    this.adjacencyList.get(destination).push(origin)
  }

  bfs(start){
    const queue=[start]
    const visited=new Set()
    while(queue.length){
      const airport=queue.shift()
      const destinations=this.adjacencyList.get(airport)
      for(const destination of destinations){
        

        if(destination==='BKK'){
          console.log('BFS found Bangkok!')
        }
        if(!visited.has(destination)){
          visited.add(destination)
          queue.push(destination);
          console.log(destination)
        }
      }
    }
  }


  dfs(start,visited=new Set()){
      visited.add(start)
      const destinations=this.adjacencyList.get(start)
      for(const destination of destinations){
      // if(destination==='BKK'){
      //   console.log('DFS found BKK')
      //   return
      // }
        if(!visited.has(destination)){
          console.log(destination)
          this.dfs(destination,visited)
        }
      }
  }


}
const gph=new TraverseGarph()
airports.forEach((airport) => gph.addNode(airport));
routes.forEach(route => gph.addEdge(...route))
gph.dfs('PHX')





class GraphTest{
  constructor(){
    this.map={}
  }

  addVertex(vertex){
    if(!this.map[vertex]){
      this.map[vertex]=[]
    }
  }
  addEdge(vertex,edge){
    if(!this.map[vertex]){
      this.addVertex(vertex)
    }
    if(!this.map[edge]){
      this.addVertex(edge)
    }
    if(!this.map[vertex].includes[edge]){
      this.map[vertex].push(edge)
    }
    if(!this.map[edge].includes[vertex]){
      this.map[edge].push(vertex)
    }
  }
  display(){
    // for(const key in this.map){
    //   console.log(key+'->'+[...this.map[key]])
    // }
    console.log(this.map)
  }

  bfs(source,destination){
    const queue=[source]
    const visited={}
    while(queue.length){
      let curr=queue.shift()
      if(visited[curr]){
        continue
      }
      if(curr===destination){
        return true
      }
      visited[curr]=true
      let neighbor=this.map[curr]
      for(let i=0;i<neighbor.length;i++){
        queue.push(neighbor[i])
      }
    }
    return false
  }
  dfs(source,destination,visited={}){
      if(visited[source]) return false
      if(source===destination) return true
      const neighbor=this.map[source]
      for(let i=0;i<neighbor.length;i++){
        if(this.dfs(neighbor[i],destination,visited)){
          return true
        }
      }
      return false
  }
}
// const gt=new GraphTest()
// gt.addEdge('Tim','Vova')
// gt.addEdge('Tim','Ann')
// gt.addEdge('Tim','Lee')
// gt.addEdge('Ann','Jhon')
// gt.addEdge('Ann','Lee')
// gt.addEdge('Ron','Lee')
// gt.addEdge('Ron','Jeff')

// console.log(gt.bfs('Tim','Jeff'))

// gt.display()