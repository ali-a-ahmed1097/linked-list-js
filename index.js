class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    setNextNode(node) {
        this.nextNode = node;
    }

    getValue() {
        return this.value;
    }

    getNextNode() {
        return this.nextNode;
    }
}

class LinkedList {
    constructor() {
        this.listSize = 0;
        this._head = null;
    }

    append(value) {
        this.listSize++;
        if (this._head === null) {
            this._head = new Node(value, null);
        } else {
            let currentNode = this._head;
            let newNode = new Node(value, null);

            while (currentNode.getNextNode() !== null) currentNode = currentNode.getNextNode();
            currentNode.setNextNode(newNode);
        }
    }

    prepend(value) {
        this.listSize++;
        this._head = new Node(value, this._head);
    }

    size() {
        return this.listSize;
    }

    head() {
        return this._head;
    }

    tail() {
        if (this._head === null) return this._head;
        let currentNode = this._head;
        while (currentNode.getNextNode() !== null) currentNode = currentNode.getNextNode();
        return currentNode;
    }

    at(index) {
        if (index > this.listSize - 1) return null;
        let currentNode = this._head;
        for (let i = 0; i < index; i++) currentNode = currentNode.getNextNode();
        return currentNode;
    }

    pop() {
        if (this._head === null) return;
        else if (this._head.getNextNode() === null) {
            this._head = null;
            this.listSize--;
        }
        let currentNode = this._head;
        while (currentNode.getNextNode().getNextNode() !== null) currentNode = currentNode.getNextNode();
        currentNode.setNextNode(null);
        this.listSize--;
    }

    contains(value) {
        let currentNode = this._head;
        while (currentNode !== null) {
            if (currentNode.getValue() === value) return true;
            currentNode = currentNode.getNextNode();
        }
        
        return false;
    }

    find(value) {
        if (this._head === null) return null;
        let currentNode = this._head;
        let i = 0;
        for (; currentNode.getValue() !== value; i++, currentNode = currentNode.getNextNode()) {
            if (currentNode.getNextNode() === null) return null;
        }
        return i;
    }

    toString() {
        let linkedListString = '';
        let currentNode = this._head;
        while (currentNode !== null) {
            linkedListString += `( ${currentNode.getValue()} ) -> `
            currentNode = currentNode.getNextNode();
        }

        linkedListString += 'null';

        return linkedListString;
    }

    insertAt(value, index) {
        this.listSize++;
        if (index >= this.listSize - 1) {
            this.append(value);
            return;
        }

        let newNode = new Node(value, this.at(index));
        this.at(index-1).setNextNode(newNode);
    }

    removeAt(index) {
        if (index > this.listSize - 1) return null;
        this.at(index-1).setNextNode(this.at(index+1));
        this.listSize--;
    }
}

function make() {
    let l = new LinkedList();
    l.prepend(1);
    l.append(2);
    l.prepend(3);
    l.append(5);
    l.insertAt(17, 3)
    return l;
}