import BlackBoard from '../src/blackboard'
import Helper from '../src/helper'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new BlackBoard()).toBeInstanceOf(BlackBoard)
  })

  it('can set a parameter on tree level', () => {
    var blackboard = new BlackBoard()

    blackboard.Set('test', true, this, null)

    expect(blackboard.Get('test', this, null)).toBeTruthy()
  })

  it('can set a parameter on node level', () => {
    var blackboard = new BlackBoard()

    blackboard.Set('test', true, this, "{'node'}")

    expect(blackboard.Get('test', this, "{'node'}")).toBeTruthy()
  })

  it('cannot get a parameter on node level', () => {
    var blackboard = new BlackBoard()

    expect(blackboard.Get('test', this, "{'node'}")).toBeFalsy()
  })

  it('can set a parameter on node level multiple times', () => {
    var blackboard = new BlackBoard()

    blackboard.Set('test', true, this, "{'node'}")

    expect(blackboard.Get('test', this, "{'node'}")).toBeTruthy()

    blackboard.Set('test', false, this, "{'node'}")

    expect(blackboard.Get('test', this, "{'node'}")).toBeFalsy()
  })

  it('gives no tree or node', () => {
    var blackboard = new BlackBoard()

    blackboard.Set('test', true, null, null)

    expect(blackboard.Get('test', null, null)).toBeTruthy()
  })

  it('can make helper class', () => {
    expect(new Helper()).toBeInstanceOf(Helper)
  })

  it('can make UUID class', () => {
    var helper = new Helper()
    expect(Helper.CreateGUID()).toBeTruthy()
  })

  it('can make two different UUID ', () => {
    var helper = new Helper()
    var uid1 = Helper.CreateGUID()
    var uid2 = Helper.CreateGUID()
    var test: boolean = false

    if (uid1 != uid2) {
      test = true
    }

    expect(test).toBeTruthy()
  })
})
