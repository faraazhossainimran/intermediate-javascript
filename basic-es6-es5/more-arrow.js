const difference = (x,y) => x - y;
const multiply = ( first, second, third) => first * second  * third;
const mult = multiply(4,5,6);
console.log(mult);
// single or one parameter
const getAge = (person) => person.age;
const student = {name: 'ananta', age: 23}
const age = getAge(student);
console.log(age);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());


// large arrow function --> for large arrow function we need to add return keyword

const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}
console.log(doMath(4,5,6));