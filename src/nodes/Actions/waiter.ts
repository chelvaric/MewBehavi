import Action from '../actionnode'
import Helper from '../../helper'
import Tick from '../../tick'

export default class Waiter extends Action {
  Enter(tick: Tick): void {}

  Open(tick: Tick): void {
    var startTime = new Date().getTime()
    tick.blackboard.Set('starttime', startTime, tick.tree.id, this.id)
  }
  Tick(tick: Tick): number {
    var currTime = new Date().getTime()
    var startTime = tick.blackboard.Get('startTime', tick.tree.id, this.id)

    if (currTime - startTime > this.endtime) {
      return Helper.SUCCESS
    }

    return Helper.RUNNING
  }
  Close(tick: Tick): void {}

  Exit(tick: Tick): void {}

  endtime: number

  constructor({ milliseconds = 0 } = {}) {
    super({
      name: 'Waiter',
      title: 'Wait <milliseconds>ms',
      properties: { milliseconds: 0 }
    })

    this.endtime = milliseconds
  }
}
