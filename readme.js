/**
 * callbag-scan
 * ------------
 *
 * Callbag operator that combines consecutive values from the same source.
 * It's essentially like array `.reduce`, but delivers a new accumulated value
 * for each value from the callbag source. Works on either pullable or
 * listenable sources.
 *
 * `npm install callbag-scan`
 *
 * Example:
 *
 *     const fromIter = require('callbag-from-iter');
 *     const iterate = require('callbag-iterate');
 *     const scan = require('callbag-scan');
 *
 *     const iterSource = fromIter([1,2,3,4,5]);
 *     const scanned = scan((prev, x) => prev + x, 0)(iterSource);
 *
 *     scanned(0, iterate(x => console.log(x))); // 1
 *                                               // 3
 *                                               // 6
 *                                               // 10
 *                                               // 15
 */

function scan(reducer, seed) {
  let hasAcc = arguments.length === 2;
  return source => (start, sink) => {
    if (start !== 0) return;
    let acc = seed;
    source(0, (t, d) => {
      if (t === 1) {
        acc = hasAcc ? reducer(acc, d) : ((hasAcc = true), d);
        sink(1, acc);
      } else sink(t, d);
    });
  };
}

module.exports = scan;
