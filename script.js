// Linked list

// Files will need to be transferred to modules for testing. Revisit ODIN page on modules: https://www.theodinproject.com/lessons/javascript-es6-modules

//Linked lists src guide: https://web.archive.org/web/20200217010131/http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html

// Starting notes:
// You will need an inner and outer class -> The outer LinkedList class will have an inner Node class
// The purose of the inner class is to be an internal helper to the outer class
// Node class will contain a value property and a nextNode property - both set as null by default

// Revisit MDN docs on classes and associated properties (static, public, private etc.)
// Odin src on classes: https://www.theodinproject.com/lessons/node-path-javascript-classes

// To test, we're creating an instance of LinkedList:
// list.append("dog")
// methods are on the LinkedList class

// https://www.geeksforgeeks.org/javascript/implementation-linkedlist-javascript/

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Methods
  printError_ListEmpty() {
    console.log("This list is empty!");
  }

  append(value) {
    // add value to the end of the list
    if (this.head == null) {
      this.head = new Node(value);
      console.log(this.head);
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let sum = 1;
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        sum++;
      }
      return sum;
    }
  }

  header() {
    if (this.head != null) {
      return this.head;
    } else {
      this.printError_ListEmpty();
    }
  }

  tail() {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    }
  }

  at(index) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let counter = 0;
      let tmp = this.head;
      while (counter < index) {
        tmp = tmp.nextNode;
        counter++;
      }
      return tmp;
    }
  }

  pop() {
    // remove element from the end of the list
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp.nextNode.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = null;
    }
  }

  contains(value) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp != null && tmp.value != value) {
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        console.log(`${value} was not found`);
        return false;
      } else {
        console.log(`Found value: ${tmp.value}`);
        return true;
      }
    }
  }

  find(value) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let index = 0;
      let tmp = this.head;
      while (tmp != null && tmp.value != value) {
        tmp = tmp.nextNode;
        index++;
      }
      if (tmp == null) {
        console.log(`${value} was not found`);
        return false;
      } else {
        console.log(`Found value: ${tmp.value} at index: ${index}`);
        return index;
      }
    }
  }

  toString() {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      let string = "";
      while (tmp != null) {
        string += `(${tmp.value}) -> `;
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        string += "null";
      }
      return string;
    }
  }

  insertAt(value, index) {
    if (this.head == null) {
      // if list is empty, add value at the head
      this.head = new Node(value);
    } else {
      let counter = 0;
      let prev = null;
      let current = this.head;
      while (current != null && counter < index) {
        prev = current;
        current = current.nextNode;
        counter++;
      }
      // if index exceeds the length of the list, just place the value at end of list
      if (current == null) {
        console.log("index exceeds counter");
        console.log(current);
        // if current is null, you can't simply replace null with the new node, you have to point the previous node to the new node, like below
        prev.nextNode = new Node(value);
      } else {
        prev.nextNode = new Node(value, current);
      }
    }
  }

  removeAt(index) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let counter = 0;
      let prev = null;
      let current = this.head;
      while (current != null && counter < index) {
        prev = current;
        current = current.nextNode;
        counter++;
      }
      if (current == null) {
        console.log(`There is no value at index: ${index}`);
      } else {
        console.log(current);
        prev.nextNode = current.nextNode;
      }
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Tests
// list.prepend("Put me first!");
console.log(`# of values in the list: ${list.size()}`);
console.log(list.header());
console.log(list.tail());
console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains("dog"));
console.log(list.contains("fish"));
console.log(list.find("Put me first!"));
console.log(list.find("parrot"));
console.log(list.find("fish"));
console.log(list.toString());

// console.log(list);

list.insertAt("fish", 2);
console.log(list.toString());

list.insertAt("horse", 12);
console.log(list.toString());

list.removeAt(4);
console.log(list.toString());

list.removeAt(12);
console.log(list.toString());
