// default --> if value is not provided, take this as a default. 
function add(num1, num2=0){
    const result = num1 + num2;
    console.log( num1, num2, result)
    return result;
}
const sum = add(5,2);