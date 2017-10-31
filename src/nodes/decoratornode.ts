import BaseNode from './basenode'
import Helper from '../helper'
import Tick from '../tick'

export default class Condition extends BaseNode {
  Enter(tick: Tick): void {
    throw new Error('Method not implemented.')
  }
  Open(tick: Tick): void {
    throw new Error('Method not implemented.')
  }
  Tick(tick: Tick): number {
    throw new Error('Method not implemented.')
  }
  Close(tick: Tick): void {
    throw new Error('Method not implemented.')
  }
  Exit(tick: Tick): void {
    throw new Error('Method not implemented.')
  }

  constructor(
    { child = null, name = 'Decorator', title = '', properties = [] } = {}
  ) {
    super({
      category: Helper.DECORATOR,
      name,
      title,
      properties
    })

    this.child = child
  }
}
