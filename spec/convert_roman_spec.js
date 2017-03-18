/* global describe, it, expect */
var convertRoman = require('../convert_roman')

describe('convertRoman', function () {
  it('should convert IV to 4', function () {
    var num = convertRoman('IV')
    expect(num).toBe(4)
  })
})
