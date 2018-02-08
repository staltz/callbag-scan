function scan(reducer, seed) {
  var hasAcc = arguments.length === 2;
  return function(source) {
    return function(start, sink) {
      if (start !== 0) return;
      var acc = seed;
      source(0, function(t, d) {
        if (t === 1) {
          acc = hasAcc ? reducer(acc, d) : ((hasAcc = true), d);
          sink(1, acc);
        } else sink(t, d);
      });
    };
  };
}

module.exports = scan;
