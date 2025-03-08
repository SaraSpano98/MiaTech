const student = {
    name: "Charlotte",
    age: 21,
    grade: "fourth",
    school: "Harvard University "
};

const entries  = Object.entries(student);
console.log(entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});