// map ==> loops through each elemnt of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.

const numbers = [3,4,5,7,100];



function doubleIt(num){
    console.log('num now', num);
    return num *2;
}
const double2 = n => n*2
const result = numbers.map(doubleIt)
const output = numbers.map(double2)
console.log(result);
console.log(output);


const output2 = numbers.map(n => n*2);
console.log(output2);
// old way
const doubled = [];
for(num of numbers ){
    const double = num *2;
    doubled.push(double)
}
console.log(doubled);