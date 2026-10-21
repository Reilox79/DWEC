// StudentCollection.js

// Helper function: average of an array of grades (0 if the array is empty)
function average(grades) {
  if (grades.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

export default class StudentCollection {
  constructor(students = []) {
    this.students = students;
  }

  // Adds a new student object to the students array
  addStudent(name, age, grades, isEnrolled) {
    const newStudent = {
      name: name,
      age: age,
      grades: grades,
      isEnrolled: isEnrolled,
    };
    this.students.push(newStudent);
  }

  // Returns the student with the given name (undefined if not found)
  getStudentByName(name) {
    for (const student of this.students) {
      if (student.name === name) {
        return student;
      }
    }
    return undefined;
  }

  // Removes a student by filtering out their name from the array
  removeStudentByName(name) {
    this.students = this.students.filter((student) => student.name !== name);
  }

  // Finds a student by name and updates their grades (true if found)
  updateStudentGrades(name, newGrades) {
    const student = this.getStudentByName(name);
    if (student === undefined) {
      return false;
    }
    student.grades = newGrades;
    return true;
  }

  // Returns the average grade of the student with the given name (null if not found)
  calculateAverageGrade(name) {
    const student = this.getStudentByName(name);
    if (student === undefined) {
      return null;
    }
    return average(student.grades);
  }

  // Returns an array of the students who are enrolled
  getEnrolledStudents() {
    return this.students.filter((student) => student.isEnrolled);
  }

  // Returns the students older than the given age
  getStudentsAboveAge(age) {
    return this.students.filter((student) => student.age > age);
  }

  // Finds the student with the highest average grade (undefined if there are none)
  getTopStudent() {
    let top = undefined;
    let topAverage = 0;
    for (const student of this.students) {
      const studentAverage = average(student.grades);
      if (top === undefined || studentAverage > topAverage) {
        top = student;
        topAverage = studentAverage;
      }
    }
    return top;
  }

  // Maps the students into a summary object with name and average grade
  getStudentSummaries() {
    return this.students.map((student) => {
      return {
        name: student.name,
        average: average(student.grades),
      };
    });
  }

  // Filters the students whose average grade reaches a threshold
  getTopStudents(threshold) {
    return this.students.filter((student) => average(student.grades) >= threshold);
  }

  // Filters the enrolled students and returns an array of their names
  getEnrolledStudentNames() {
    return this.getEnrolledStudents().map((student) => student.name);
  }

  // Returns an array of strings formatting each student's grades
  formatGrades() {
    return this.students.map((student) => {
      let gradesText = "";
      for (let i = 0; i < student.grades.length; i++) {
        if (i > 0) {
          gradesText += ", ";
        }
        gradesText += student.grades[i];
      }
      return `${student.name}: ${gradesText}`;
    });
  }

  // Filters the students whose average grade is 90 or above
  getHonorRollStudents() {
    return this.getTopStudents(90);
  }

  // Converts the students array to a JSON string
  serializeStudents() {
    return JSON.stringify(this.students);
  }

  // Converts a JSON string back into the students array
  deserializeStudents(json) {
    this.students = JSON.parse(json);
  }
}
