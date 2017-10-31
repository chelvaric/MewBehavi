// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class BlackBoard {
  _baseMemory: any
  _treeMemory: any

  constructor() {
    this._baseMemory = {}
    this._treeMemory = {}
  }

  _getTreeMemory(treescope: any) {
    if (!this._treeMemory[treescope]) {
      this._treeMemory[treescope] = {
        nodeMemory: {},
        openNodes: []
      }
    }

    return this._treeMemory[treescope]
  }

  _getNodeMemory(treememory: any, nodeScope: any) {
    var memory = treememory['nodeMemory']
    if (!memory[nodeScope]) {
      memory[nodeScope] = {}
    }
  }

  _getMemory(treeScope: any, nodeScope: any) {
    var memory = this._baseMemory

    if (treeScope) {
      memory = this._getTreeMemory(treeScope)

      if (nodeScope) {
        memory = this._getNodeMemory(memory, nodeScope)
      }
    }

    return memory
  }

  public Set(key: string, value: any, treeScope: any, nodeScope: any) {
    var memory = this._getMemory(treeScope, nodeScope)

    memory[key] = value
  }

  public Get(key: string, treeScope: any, nodeScope: any) {
    var memory = this._getMemory(treeScope, nodeScope)

    return memory[key]
  }
}
