/* eslint-disable no-param-reassign */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchStudent = newGrades.filter((ele) => ele.studentId === student.id);
      student.grade = matchStudent[0] ? matchStudent[0].grade : 'N/A';
      return student;
    });
}
module.exports = updateStudentGradeByCity;
