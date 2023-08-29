const max = Math.max(4,5,6,7,9);
// console.log(max);

const numbers = [4,5,6,7,87,8];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);


// use spread operator to copy 
const friends = [4,5,6,7,7];
const bondhu = friends;
const dusto = [...friends]
console.log('dusto', dusto);
bondhu.push(12)
console.log('dusto push', dusto);
console.log('dusto push', bondhu);
console.log('friends', friends);