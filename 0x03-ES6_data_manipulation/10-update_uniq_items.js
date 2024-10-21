function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
}
module.exports = updateUniqueItems;
