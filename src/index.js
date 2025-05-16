import { LinkedList } from "./main.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list);

console.log(list.size());

console.log(list.head);

console.log(list.tail);

console.log(list.at(4));

list.pop();

console.log(list);

console.log(list.contains("parrot"));

console.log(list.find("lizard"));

console.log(list.toString());

list.insertAt("frog", 2);

list.removeAt(0);

console.log(list.toString());
