const LinkedList = () => {
    let listHead = null;
    
    const head = () => listHead.data;

    const tail = () => {
        let current = listHead;
        while(current.next) current = current.next;
 
        return current.data;
    }

    const append = (value) => {
        let newNode = Node(value);

        if (!listHead) {
            listHead = newNode;
            return;
        }

        let current = listHead;
        while(current.next) current = current.next;

        current.next = newNode;
    }

    const prepend = (value) => {
        let newNode = Node(value);

        let oldHead = listHead;
        listHead = newNode;
        newNode.next = oldHead;
    }
    
    const size = () => {
        let current = listHead;
        let count = 0;

        while(current) {
            current = current.next;
            count++
        }

        return count;
    }
    
    const nodeAt = (index) => {
        let sizeOfList = size();
        
        if (sizeOfList < index) {
            console.log('ERROR: The given index number is highier than the list it self!');
            return;
        }

        let current = listHead;

        for (let i = 0; i < sizeOfList; i++) {
            if (i === index) {
                let { data, next } = current;
                let myString = `\nNode at position ${index}: ${data} | Next node: ${next.data}`;
                return myString;
            }
        }

        current = current.next;
    }

    const pop = () => {
        let current = listHead;
        while (current.next.next) current = current.next;

        current.next = null;
    }

    const contains = (value) => {
        let current = listHead;
        let has = false;

        while(current) {
            if (current.data === value) return has = true;
            current = current.next;
        }

        return has;
    }

    const find = (value) => {
        let current = listHead;
        let found = "The passed value wasn't found in the list!";

        while(current) {
            if (current.data === value) found = `Found: '${value}'`;
            current = current.next;
        }

        return found;
    }
    
    const toString = () => {
        let sizeOfList = size();

        if (sizeOfList <= 0 ) {
            let myString = "ERROR: The list is empity\n";
            return myString;
        }
        
        let current = listHead;
        let myString;

        for (let i = 0; i < sizeOfList; i++) {
            if (i === 0) {
                myString = `(${i+1}) Head: ${current.data.toString()}\n`;
            }

            else if (i === sizeOfList - 1) {
                myString += `(${i+1}) Tail: ${current.data.toString()}\n`;
            }

            else { 
                myString += `(${i+1}) Node: ${current.data.toString()}\n`;
            }

            current = current.next;
        }

        myString += `Size: ${sizeOfList}\n`
        return myString;
    }

    const insertAt = (value, index) => {
        let sizeOfList = size();
        
        if (index > sizeOfList) {
            console.log("ERROR: The given index number is highier than the list it self!\n")
            return;
        }

        let current = listHead;
        let prev;
        let newNode = Node(value);

        for (let i = 0; i < sizeOfList; i++) {

            if (i + 1 === index) {
                prev.next = newNode;
                newNode.next = current;
                return;
            }

            prev = current;
            current = current.next;
        }
    }

    const removeAt = (index) => {
        let sizeOfList = size();

        if (index > sizeOfList) {
            console.log("ERROR: The given index number is highier than the list it self!\n");
            return;
        }

        let current = listHead;
        let prev;
        
        for (let i = 0; i < sizeOfList; i++) {
            if (i + 1 === index) {
                prev.next = current.next;
            }
        }

        prev = current;
        current = current.next;
    } 

    return { 
        head, 
        tail, 
        append, 
        prepend, 
        size, 
        nodeAt, 
        pop, 
        contains, 
        find, 
        toString,
        insertAt,
        removeAt
    }
}

function Node(value = null) {
    let data = value;
    let next = null;

    return { data, next }
}

export { LinkedList } 