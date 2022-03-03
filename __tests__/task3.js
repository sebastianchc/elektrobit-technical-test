const { extractValuesForKey } = require('../tasks/task3.js');

describe('Task 3 Tests', () => {
  test('Test 1', () => {
    const result = extractValuesForKey(
      {
        uuid: 1,
        innerOne: { someKey: 'some text' },
        innerTwo: {
          uuid: 2,
          innerThree: {
            someOtherKey: 'some other text',
            innerFour: { uuid: 3 },
          },
        },
      },
      'uuid'
    );
    const expected = new Map([
      ['', 1],
      ['innerTwo', 2],
      ['innerTwo/innerThree/innerFour', 3],
    ]);
    expect(result).toStrictEqual(expected);
  });
  test('Test 2', () => {
    const someObject = {
      uuid: 1,
      innerOne: { someKey: 'some text' },
      innerTwo: {
        uuid: 2,
        innerThree: { someOtherKey: 'some other text', innerFour: { uuid: 3 } },
      },
    };
    const result = extractValuesForKey({ someObject }, 'uuid');
    const expected = new Map([
      ['someObject', 1],
      ['someObject/innerTwo', 2],
      ['someObject/innerTwo/innerThree/innerFour', 3],
    ]);
    expect(result).toStrictEqual(expected);
  });
});
