// find ==> if it finds any of true condions then it will return that. Basically it will not go to another details of array to check.
const players = [55,66,77,88,50];
const selected = players.find (player => player > 57);
console.log(selected);