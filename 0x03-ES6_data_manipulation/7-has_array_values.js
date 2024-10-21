function hasValuesFromArray(mySet, myArr) {
  return myArr.reduce((acc, curr) => acc && mySet.has(curr), true);
}

module.exports = hasValuesFromArray;
