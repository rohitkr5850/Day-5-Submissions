function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

// Test
const obj = {
  name: 'John',
  address: {
    city: 'NYC',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ['reading', 'gaming']
};

console.log(flattenObject(obj));

// Output:
// {
//   "name": "John",
//   "address.city": "NYC",
//   "address.coordinates.lat": 40.7128,
//   "address.coordinates.lng": -74.006,
//   "hobbies.0": "reading",
//   "hobbies.1": "gaming"
// }
