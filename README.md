# linked-lists

### Instructions

You will need two classes or factories:

- [x] `LinkedList` class / factory, which will represent the full list.
- [x] `Node class` / factory, containing a `value` property and a `nextNode` property, set both as `null` by default.

Build the following functions in your linked list class / factory:

- [x] `append(value)` adds a new node containing `value` to the end of the list
- [x] `prepend(value)` adds a new node containing `value` to the start of the list
- [x] `size` returns the total number of nodes in the list
- [x] `head` returns the first node in the list
- [x] `tail` returns the last node in the list
- [x] `at(index)` returns the node at the given `index`
- [x] `pop` removes the last element from the list
- [x] `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
- [x] `find(value)` returns the index of the node containing value, or null if not found.
- [x] `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`

### Extra Credit

- [x] `insertAt(value, index)` that inserts a new node with the provided `value` at the given `index`.
- [x] `removeAt(index)` that removes the node at the given `index`.

**Extra Credit Tip:** When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

### Test it out

- [x] Create a `main.js` file and make sure it imports your `LinkedList` class or factory. This is where we’ll test the list.
- [x] Create an instance of your `LinkedList` and populate it with nodes:

```
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
```

- [x] Add `console.log(list.toString());` to the end of the file and run it.
      If everything is working, the output should be:

```
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

---

### Resources

Linked lists src guide (Java):
https://web.archive.org/web/20200217010131/http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html

JS guide on linked lists:
https://www.geeksforgeeks.org/javascript/implementation-linkedlist-javascript/
