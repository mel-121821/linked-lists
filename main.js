import { LinkedList } from "./script.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Tests
list.prepend("Put me first!");
console.log(`# of values in the list: ${list.size()}`);
console.log(list.header());
console.log(list.tail());
console.log(list.at(2));
console.log(list.at(3));
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
