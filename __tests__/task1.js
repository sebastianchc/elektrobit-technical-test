const { sum } = require('../tasks/task1.js');

global.console.log = jest.fn();

describe('Task 1 Tests', () => {
  test('Test 1', () => {
    sum((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 0');
  });
  test('Test 2', () => {
    sum(1)((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 1');
  });
  test('Test 3', () => {
    sum(1)(2)((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 3');
  });
  test('Test 4', () => {
    sum(1)(2)(4)((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 7');
  });
});
