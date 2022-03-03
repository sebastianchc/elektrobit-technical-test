const sum = (arg) =>
  typeof arg === 'function'
    ? arg(0)
    : (b) => (typeof b === 'function' ? b(arg) : sum(arg + b));

module.exports = { sum };
