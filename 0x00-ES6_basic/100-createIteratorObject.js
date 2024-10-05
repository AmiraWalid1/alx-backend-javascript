export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employees of Object.values(report.allEmployees)) {
    allEmployees.push(...employees);
  }
  return allEmployees;
}
