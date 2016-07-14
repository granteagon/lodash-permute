
var expect = require('expect')
var permute = require('../lib/index').permute

describe('#permute', () => {

  it('permutes items in an array', () => {
    expect(
      permute(['a', 'b', 'c'], [1, 0, 2])
    ).toEqual(['b', 'a', 'c'])
    expect(
      permute([1, 2, 3, 4, 5], (i, val) => val)
    ).toEqual([ , 1, 2, 3, 4, 5])
    expect(
      permute([
        {name: 'Fred'},
        {name: 'Barney'},
        {name: 'Wilma'},
        {name: 'Betty'}
      ], [1, 1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0])
    ).toEqual([
      { name: 'Barney' },
      { name: 'Barney' },
      { name: 'Barney' },
      { name: 'Wilma' },
      { name: 'Wilma' },
      { name: 'Wilma' },
      { name: 'Betty' },
      { name: 'Betty' },
      { name: 'Betty' },
      { name: 'Fred' },
      { name: 'Fred' },
      { name: 'Fred' }
    ])
  })

})
