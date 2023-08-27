
// filters selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const players = [4,5,67,6, 70, 40, 99];
const selected = players.filter(p => p>5);
console.log(selected);

const divideSelected = players.filter(p => p % 2 ==1);
console.log(divideSelected);

const friends = ['Arif', 'Shakil', 'Kanak', 'Rizvi'];
const friendsFilter = friends.filter(friend => friend.length > 4);
console.log(friendsFilter);

