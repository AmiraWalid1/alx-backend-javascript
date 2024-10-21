function cleanSet(mySet, str) {
  const newArr = [];
  mySet.forEach((element) => {
    if (typeof str === 'string' && str && typeof element === 'string' && element.startsWith(str)) {
      newArr.push(element.substring(str.length));
    }
  });
  return newArr.join('-');
}

module.exports = cleanSet;
