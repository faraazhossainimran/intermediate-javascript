// default --> if value is not provided, take this as a default. e.g. num2=0
function add(num1, num2=0){
    // const result = num1 + num2;
    // console.log( num1, num2, result)
    // return result;
}
const sum = add(5,2);
// default parameter for sting 
function fullName(first, last = 'hossain'){
    // const full = first + ' ' + last;
    // console.log(full)
    // return full

}
const name = fullName('Imran')
// problems
function arr (firstName = [], lastName=  []){
    const print = firstName + lastName;
    console.log(firstName, lastName, print);
    return print;
}
const arrCheck = arr('Imran', 'hossain')