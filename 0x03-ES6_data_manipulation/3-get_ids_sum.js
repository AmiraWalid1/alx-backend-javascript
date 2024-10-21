function getStudentIdsSum(students) {
  return students.reduce((acc, curr) => acc + curr.id, students[0].id);
}
module.exports = getStudentIdsSum;
