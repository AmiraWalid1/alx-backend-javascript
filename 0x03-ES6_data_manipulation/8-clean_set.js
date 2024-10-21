function cleanSet(mySet, str) {
  let newArr = [];
  mySet.forEach((element) => {
    str && element.startsWith(str) ? newArr.push(element.substring(str.length)) : '';
  });
  return newArr.join('-');
}

module.exports = cleanSet;
