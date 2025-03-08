const students = [       //array 
    { name: "Alice", grade: 85 },
    { name: "Giorgia", grade: 58 },
    { name: "Bob", grade: 90 },
    { name: "David", grade: 45 },
    { name: "Eve", grade: 80 },
]

const passedStudents = students.filter(student => student.grade >= 60);   // Creazione dell'array con gli studenti che hanno una grade >= 60

const firstFailedStudent = students.find(student => student.grade < 60); // Trovare il primo studente con una grade < 60

console.log("Studenti promossi:", passedStudents);
console.log("Primo studente bocciato:", firstFailedStudent);

