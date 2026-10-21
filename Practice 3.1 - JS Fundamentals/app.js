// app.js
import StudentCollection from "./StudentCollection.js";

// Initialize the collection with some students
const students = [
  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
  { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
  { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
  { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

// Create a new StudentCollection object
const studentCollection = new StudentCollection(students);

// Find a student by name and show it on the screen
console.log("Student found:", studentCollection.getStudentByName("Jane Smith"));
console.log("Student not found:", studentCollection.getStudentByName("Nobody"));

// Add a new student
studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);

// Find the top student based on grades
const topStudent = studentCollection.getTopStudent();
console.log("Top student:", topStudent);

// TASK: test all the methods you have created

// removeStudentByName
studentCollection.removeStudentByName("Sam Green");
console.log("After removing Sam Green:", studentCollection.students.map((s) => s.name));

// updateStudentGrades
console.log("Updated grades of John Doe:", studentCollection.updateStudentGrades("John Doe", [95, 96, 97]));
console.log("Updated grades of Nobody:", studentCollection.updateStudentGrades("Nobody", [1]));
console.log("John Doe:", studentCollection.getStudentByName("John Doe"));

// calculateAverageGrade
console.log("Average of Jane Smith:", studentCollection.calculateAverageGrade("Jane Smith"));
console.log("Average of Nobody:", studentCollection.calculateAverageGrade("Nobody"));

// getEnrolledStudents
console.log("Enrolled students:", studentCollection.getEnrolledStudents());

// getStudentsAboveAge
console.log("Students above age 19:", studentCollection.getStudentsAboveAge(19));

// getStudentSummaries
console.log("Summaries:", studentCollection.getStudentSummaries());

// getTopStudents
console.log("Top students (>= 92):", studentCollection.getTopStudents(92));

// getEnrolledStudentNames
console.log("Enrolled names:", studentCollection.getEnrolledStudentNames());

// formatGrades
console.log("Formatted grades:", studentCollection.formatGrades());

// getHonorRollStudents
console.log("Honor roll:", studentCollection.getHonorRollStudents());

// Serialize the students to JSON
const serializedData = studentCollection.serializeStudents();
console.log("Serialized Data:", serializedData);

// Deserialize the JSON back into the collection
studentCollection.deserializeStudents(serializedData);
console.log("Deserialized Data:", studentCollection.students);
