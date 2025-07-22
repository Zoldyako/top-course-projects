import HashMap from "./HashMap.js";

const list = HashMap();

list.set('José', 'Victor');
list.set('Zoldyako', 'username');
list.set('ABC', 'ABC');
list.set('apple', 'red')
list.set('banana', 'yellow')
list.set('carrot', 'orange')
list.set('dog', 'brown')
list.set('elephant', 'gray')
list.set('frog', 'green')
list.set('grape', 'purple')
list.set('hat', 'black')
list.set('ice cream', 'white')
list.set('jacket', 'blue')
list.set('kite', 'pink')
list.set('lion', 'golden')

console.log(`Getting: 'José': ${list.get('José')}`)
console.log(`Getting: 'Zoldyako': ${list.get('Zoldyako')} | 'ABC':  ${list.get('ABC')}`)

console.log(`\nUpdating 'José': ${list.set('José', 'Dias')}`);
console.log(`Getting 'José': ${list.get('José')}`);

console.log(`\nDoes it has 'José': ${list.has('José')} | 'Zoldyako': '${list.has('Zoldyako')} | ABC': ${list.has('ABC')} | 'Victor': ${list.has('Victor')}`)

console.log(`\nRemoving 'ABC': ${list.remove('ABC')}`);
console.log(`Has 'ABC': ${list.has('ABC')}`);

console.log(`Getting all entries: ${list.entries()}`);

console.log(`\nThe bucket list length is... ${list.length()}`);

console.log(`Getting all keys: ${list.keys()}`);
console.log(`Getting all values: ${list.values()}`)

console.log('Cleaning...');
list.clear()
console.log(`Getting all entries: ${list.entries()}`);