const arrowFunc = (a,b) => a+b;
const print = arrowFunc(4,5);


console.log(print);

const person = {
    name: 'Imran',
    age: '24',
    profession: {
        teacher: "English Teacher",
        graphics: "Graphics Designer",
        student: "Student at Gov Bangla College"
    },
    hobby: 'Travelling'

}
// if right side is an object then destructure them as object, if right side is an array then destructure them as array 
const {name, age, profession, hobby} = person;
console.log(name);
console.log(age);
console.log(profession.student);

// array example 
const numbers = [2,5];
const [first, second] = numbers;
console.log(second);


function doubleThem (a,b){
    return [a*2, b*3];

}
const [num1, num2] = doubleThem(6,4);
console.log(num2);
