import BlackBoard from '../src/blackboard'
import BaseNode from './nodes/basenode'

export default class Tick {
  tree: any = null
  openNodes: any = []
  nodeCount: number = 0
  debug: any = null
  targt: any = null
  blackboard: BlackBoard

  public EnterNode(node: BaseNode) {
    this.nodeCount++
    this.openNodes.push(node)
    //call debug here
  }

  public OpenNode(node: BaseNode) {
    //call debug here
  }

  public TickNode(node: BaseNode) {
    //call debug here
  }

  public CloseNode(node: BaseNode) {
    this.openNodes.pop()
    //call debug here
  }

  public ExitNode(node: BaseNode) {
    //call debug here
  }
}
