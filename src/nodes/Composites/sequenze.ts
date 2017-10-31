import Composite from '../compositenode'
import Helper from '../../helper'
import Tick from '../../tick'

export default class Sequence extends Composite {
  Enter(tick: Tick): void {}

  Open(tick: Tick): void {}
  Tick(tick: Tick): number {
    for (var i = 0; i < this.childeren.length; i++) {
      var status = this.childeren[i]._execution(tick)

      if (status !== Helper.SUCCESS) {
        return status
      }
    }

    return Helper.SUCCESS
  }
  Close(tick: Tick): void {}

  Exit(tick: Tick): void {}

  constructor({ childeren = [] } = {}) {
    super({
      name: 'Sequence',
      childeren
    })
  }
}
