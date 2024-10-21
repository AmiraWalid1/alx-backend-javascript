function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchStudent = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchStudent ? matchStudent.grade : 'N/A',
      };
    });
}
module.exports = updateStudentGradeByCity;
