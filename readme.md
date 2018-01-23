# callbag-scan

Callbag operator that combines consecutive values from the same source. It's essentially like array `.reduce`, but delivers a new accumulated value for each value from the callbag source. Works on either pullable or listenable sources.

`npm install callbag-scan`

## example

```js
const fromIter = require('callbag-from-iter');
const iterate = require('callbag-iterate');
const scan = require('callbag-scan');

const iterSource = fromIter([1,2,3,4,5]);
const scanned = scan((prev, x) => prev + x, 0)(iterSource);

scanned(0, iterate(x => console.log(x)); // 1
                                         // 3
                                         // 6
                                         // 10
                                         // 15
```
