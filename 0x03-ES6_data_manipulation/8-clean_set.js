function cleanSet(mySet, str) {
  let newstr = '';
  mySet.forEach((element) => {
    newstr += str && element.startsWith(str) ? `${element.substring(str.length)}-` : '';
  });
  return newstr.slice(0, -1);
}

module.exports = cleanSet;
