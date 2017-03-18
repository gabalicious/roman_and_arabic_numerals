/* global describe, it, expect */
var convertArabic = require('../convert_arabic')

describe('convertArabic', function () {
  it('should convert 4 to IV', function () {
    var num = convertArabic(4)
    expect(num).toBe('IV')
  })
})
