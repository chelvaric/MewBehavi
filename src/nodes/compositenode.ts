import BaseNode from './basenode'
import Helper from '../helper'
import Tick from '../tick'

export default class Composite extends BaseNode {
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
    { childeren = [], name = 'Composite', title = '', properties = [] } = {}
  ) {
    super({
      category: Helper.COMPOSITE,
      name,
      title,
      properties
    })

    this.childeren = childeren
  }
}
