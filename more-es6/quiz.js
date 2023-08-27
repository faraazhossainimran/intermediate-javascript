const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);
// what will be the value of y? 

const {x, y, z} = {x: 1, y: 2, z: 3};
console.log(y);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const result = friends.find(friend => friend.length== 5)
console.log(result);
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {dusk} = product
console.log(dusk);