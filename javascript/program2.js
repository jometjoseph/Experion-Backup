// functions inside object 
const student = {
    fullName: 'student 1',
    mark1: 40,
    mark2: 50,
    // total: function(){
    //     const extraMark = 5;
    //     console.log(this.mark1 + this.mark2);
    // }
};

// student.total();
// const student = {
//     name: 'John Doe'
// };
// const marks = {
//     mark1: 35,
//     mark2: 56
// };
// const copy = Object.assign({Age: 15}, student, marks);
// copy.name = 'Mark Antony';
// console.log(student);
// console.log(copy);

// const {fullName, mark1} = student;
// console.log(fullName);

const keys = Object.keys(student);
keys.forEach(keys=>{
    console.log(student[keys]);
});

const values = Object.values(student);
values.forEach(value=>{
    console.log(value);
});


