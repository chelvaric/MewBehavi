import Helper from '../helper'
import Tick from '../tick'

export default abstract class BaseNode {
  name: string = ''
  title: string = ''
  category: string
  description: string
  properties: { [propname: string]: any } = {}
  id: string = ''
  childeren: BaseNode[] = []
  child: any

  public constructor(
    {
      category = '',
      name = '',
      title = '',
      description = '',
      properties = {}
    } = {}
  ) {
    this.id = Helper.CreateGUID()

    this.title = title
    this.name = name
    this.properties = properties
    this.category = category
    this.description = description
  }

  public _execution(tick: Tick): number {
    // enter the node
    this._enter(tick)

    //open the node
    if (!tick.blackboard.Get('isOpen', tick.tree.id, this.id)) {
      this._open(tick)
    }

    //tick the node
    var status = this._tick(tick)

    //close the node if not running
    if (status != Helper.RUNNING) {
      this._close(tick)
    }

    this._exit(tick)

    return status
  }

  _enter(tick: Tick) {
    tick.EnterNode(this)
    this.Enter(tick)
  }

  _open(tick: Tick) {
    tick.OpenNode(this)
    tick.blackboard.Set('isOpen', true, tick.tree.id, this.id)
    this.Open(tick)
  }

  _tick(tick: Tick): number {
    tick.TickNode(this)
    return this.Tick(tick)
  }

  _close(tick: Tick) {
    tick.CloseNode(this)
    tick.blackboard.Set('isOpen', false, tick.tree.id, this.id)
    this.Close(tick)
  }

  _exit(tick: Tick) {
    tick.ExitNode(this)
    this.Exit(tick)
  }

  abstract Enter(tick: Tick): void
  abstract Open(tick: Tick): void
  abstract Tick(tick: Tick): number
  abstract Close(tick: Tick): void
  abstract Exit(tick: Tick): void
}
