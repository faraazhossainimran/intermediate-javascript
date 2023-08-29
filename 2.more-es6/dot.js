// dot notation person.name 
// bracket notation person['add-dress']
const person = {
    name: 'kodom ali',
    job: 'badam khawa',
    'add-dress': 'kochu khet'
}
const prop = 'name';
console.log(person[prop]);
console.log(person.name);

console.log(person['add-dress']);