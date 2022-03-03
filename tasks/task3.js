/**
 * @param object - object to traverse
 * @param searchkey - keys to search for in object
 * @return map containing all found values
 */

const extractValuesForKey = (object, searchkey) => {
  let resultMap = new Map();

  const traverseObject = (obj, path) => {
    for (let [key, value] of Object.entries(obj)) {
      if (key === searchkey) {
        resultMap.set(path.join('/'), value);
      }
      if (typeof obj[key] === 'object') {
        traverseObject(obj[key], [...path, key]);
      }
    }
  };
  traverseObject(object, []);

  return resultMap;
};

module.exports = { extractValuesForKey };
