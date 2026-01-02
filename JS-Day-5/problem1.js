function deepFlatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...deepFlatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Test
const nested = [1, [2, [3, [4, 5]], 6], [7, 8], 9, [[10]]];
console.log(deepFlatten(nested));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]