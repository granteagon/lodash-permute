# _.permute lodash mixin
Permute moves items in a Javascript array.

`npm install lodash-permute`

lodash issue is [here](https://github.com/lodash/lodash/issues/1701).
Give it a 👍 if you want to see it added to lodash.

## Example
```js
import { permute } from 'lodash-permute'

// permute with an array
permute(['a', 'b', 'c'], [1, 0, 2])
// -> ['b', 'a', 'c']

// permute with a function that returns the desired index for the new array
permute([1, 2, 3, 4, 5], (i, val) => val)
// -> [ , 1, 2, 3, 4, 5]

// you can also do weird stuff like cloning
let names = [{name: 'Fred'}, {name: 'Barney'}, {name: 'Wilma'}, {name: 'Betty'}]
names = permute(names, [1, 1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0])
// -> [ { name: 'Barney' },
// { name: 'Barney' },
// { name: 'Barney' },
// { name: 'Wilma' },
// { name: 'Wilma' },
// { name: 'Wilma' },
// { name: 'Betty' },
// { name: 'Betty' },
// { name: 'Betty' },
// { name: 'Fred' },
// { name: 'Fred' },
// { name: 'Fred' } ]
```
