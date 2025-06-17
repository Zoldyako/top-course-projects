import { LinkedList } from "./linkedList.js"

let nodeList = LinkedList();


console.log('Inicial node list: ');
console.log(nodeList.toString());

console.log(`Appending: Zebra`);
nodeList.append('Zebra')
console.log(nodeList.toString());


console.log(`Appending: Cat`);
nodeList.append('Cat');
console.log(nodeList.toString());

console.log(`Appending: Dog`);
nodeList.append('Dog');
console.log(nodeList.toString());

console.log(`Prepending: Bird`);
nodeList.prepend('Bird');
console.log(nodeList.toString());

console.log(`Prepending: Horse`);
nodeList.prepend('Horse');
console.log(nodeList.toString());

console.log(`Searching for node at position 3: ${nodeList.nodeAt(3)}`)
console.log(nodeList.toString());

console.log(`Removing the last node in the list!`);
console.log(nodeList.toString());

console.log(`Searching for 'Cat' in the node list using contains(): ${nodeList.contains('Cat')}`);
console.log(`Searching for 'Pug' in the node list using contains(): ${nodeList.contains('Pug')}`);

console.log(`Searching for 'Cat' in the node list using find(): ${nodeList.find('Cat')}`)

console.log(`Inserting 'Lion' in the list 3º position`);
nodeList.insertAt("Lion", 3);
console.log(nodeList.toString());
