// filter selects elements based on a condition and returan an array with the 
//elements that fulfilled the condition .
const numbers = [1, 2, 4,6,15,18];
const players = [75, 67,55,57,59];
//const selected = players.filter(p => p> 75);
//const selected = players.filter(p => p> 80);
//const selected = players.filter(p => p> 50);
const selected = players.filter(p =>p% 2 ===1)
console.log(selected)

const friends = ['Tony','Joy', 'janker','rakib', 'Mehady'];
const oddFriends = friends.filter(friend =>friend.length > 4)
console.log(oddFriends)