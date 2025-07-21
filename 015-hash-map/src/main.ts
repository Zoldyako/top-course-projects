import HashMap from "./HashMap.js";

const list = HashMap();


list.set('José', 'Zoldyako');
list.set('Zoldyako', 'My artistic name');
list.set('ABC', 'ABC');
console.log(`Getting: 'José': ${list.get('José')}`)
console.log(`Getting: 'Zoldyako': ${list.get('Zoldyako')} | 'ABC':  ${list.get('ABC')}`)

console.log(`\nUpdating 'José': ${list.set('José', 'Victor')}`);
console.log(`Getting 'José': ${list.get('José')}`);

console.log(`\nDoes it has 'José': ${list.has('José')} | 'Zoldyako': '${list.has('Zoldyako')} | ABC': ${list.has('ABC')} | 'Victor': ${list.has('Victor')}`)

console.log(`\nRemoving 'ABC': ${list.remove('ABC')}`);
console.log(`Has 'ABC': ${list.has('ABC')}`);

console.log(`Getting all entries: ${list.getAll()}`);
console.log('Cleaning...');
list.clear()
console.log(`Getting all entries: ${list.getAll()}`);
