let person = {
    name: "Alessio",
    age: 30, 
    city: "Milano"
}; 

console.log(person);

for (let chiave in person) {
    if (person.hasOwnProperty(chiave)) {
        console.log(chiave, ":", person[chiave]);
    }
}