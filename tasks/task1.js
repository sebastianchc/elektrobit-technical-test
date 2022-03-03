const sum = (a) =>
  typeof a === 'function'
    ? a(0)
    : (b) =>
        typeof b === 'function'
          ? b(a)
          : (c) =>
              typeof c === 'function'
                ? c(a + b)
                : (d) =>
                    typeof d === 'function'
                      ? d(a + b + c)
                      : console.log('There are too many values');

module.exports = { sum };
