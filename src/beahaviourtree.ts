import Helper from './helper'
import BlackBoard from './blackboard'
import Tick from './tick'
import BaseNode from './nodes/basenode'

export default class BehaviourTree {
  id: string = ''
  root: BaseNode

  constructor() {
    this.id = Helper.CreateGUID()
  }

  public Tick(blackboard: BlackBoard, target: any) {
    /* CREATE A TICK OBJECT */
    var tick = new Tick()
    tick.targt = target
    tick.blackboard = blackboard
    tick.tree = this

    /* TICK NODE*/
    this.root._execution(tick)

    /*CLOSE NODES FROM LAST TICK IF NEEDED*/
    var lastopenNodes: BaseNode[] = blackboard.Get('openNodes', this.id, null)
    var currentOpenNodes: BaseNode[] = tick.openNodes.slice(0)
    /* DON'T CLOSE IF IT WAS OPEN THIS TICK   */
    var start = 0
    for (
      var i = 0;
      i < Math.min(lastopenNodes.length, currentOpenNodes.length);
      i++
    ) {
      start = i + 1
      if (lastopenNodes[i] != currentOpenNodes[i]) {
        break
      }
    }

    //CLOSE THE NODES
    for (var i = lastopenNodes.length - 1; i >= start; i--) {
      lastopenNodes[i]._close(tick)
    }

    /* POPULATE THE BLACKBOARD */
    blackboard.Set('openNodes', currentOpenNodes, this.id, null)
    blackboard.Set('nodeCount', tick.nodeCount, this.id, null)
  }
}
