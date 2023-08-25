const glass = { 
    name: "glass", 
color: "golden", price: 12,
 inCleaned: true 
};
console.log(glass);
// just keys of the obj
const keys = Object.keys(glass);
console.log(keys);
// just values of the obj
const values = Object.values(glass)
console.log(values);
// obj and property together - array of array - two dimentional array
const pairs = Object.entries(glass)
console.log(pairs);

