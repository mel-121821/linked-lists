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
    let sum = 1;
    let tmp = this.head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      sum++;
    }
    return sum;
  }

  header() {
    if (this.head != null) {
      return this.head;
    } else {
      console.log("This list is empty!");
      return null;
    }
  }

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}

  insertAt() {}

  removeAt() {}
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// list.prepend("Put me first!");
// console.log(list.size());
console.log(list.header());

console.log(list);
