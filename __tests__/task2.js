const { sum } = require('../tasks/task2.js');

global.console.log = jest.fn();

describe('Task 2 Tests', () => {
  test('Test 1', () => {
    sum((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 0');
  });
  test('Test 2', () => {
    sum(1)(2)(3)(4)(5)(6)((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 21');
  });
  test('Test 3', () => {
    sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)((result) => console.log(`-> ${result}`));
    expect(global.console.log).toHaveBeenCalledWith('-> 55');
  });
});
