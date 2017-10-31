export default class Helper {
  // NODE STATES
  //================================================================
  static readonly SUCCESS = 1
  static readonly FAILURE = 2
  static readonly RUNNING = 3
  static readonly ERROR = 4

  // NODE CATEGORYS
  static readonly COMPOSITE = 'composite'
  static readonly DECORATOR = 'decorator'
  static readonly ACTION = 'action'
  static readonly CONDITION = 'condition'

  //HELPER FUNCTIONS
  //====================================================================
  public static CreateGUID() {
    var s = []
    var hexDigits = '0123456789abcdef'
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = '4'

    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hexDigits.substr(0x8, 1)

    s[8] = s[13] = s[18] = s[23] = '-'

    var uuid = s.join('')
    return uuid
  }
}
