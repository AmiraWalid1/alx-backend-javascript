function getStudentIdsSum(students) {
  return students.reduce((acc, curr) => acc + curr.id, 0);
}
module.exports = getStudentIdsSum;
