import HashMap from "./HashMap.js";

const list = HashMap();


list.set('José', 'Victor');
list.set('Zoldyako', 'username');
list.set('ABC', 'ABC');
console.log(`Getting: 'José': ${list.get('José')}`)
console.log(`Getting: 'Zoldyako': ${list.get('Zoldyako')} | 'ABC':  ${list.get('ABC')}`)

console.log(`\nUpdating 'José': ${list.set('José', 'Dias')}`);
console.log(`Getting 'José': ${list.get('José')}`);

console.log(`\nDoes it has 'José': ${list.has('José')} | 'Zoldyako': '${list.has('Zoldyako')} | ABC': ${list.has('ABC')} | 'Victor': ${list.has('Victor')}`)

console.log(`\nRemoving 'ABC': ${list.remove('ABC')}`);
console.log(`Has 'ABC': ${list.has('ABC')}`);

console.log(`Getting all entries: ${list.getAll()}`);

console.log(`\nThe bucket list length is... ${list.length()}`);

console.log(`Getting all keys: ${list.keys()}`);

console.log('Cleaning...');
list.clear()
console.log(`Getting all entries: ${list.getAll()}`);