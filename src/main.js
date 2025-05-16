class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    this.head = newNode;
    if (this.tail !== null) {
      this.tail = this.tail;
    } else {
      this.tail = newNode;
    }
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  size() {
    let tmp = this.head;
    let s = 0;
    while (tmp != null) {
      tmp = tmp.next;
      s++;
    }
    return s;
  }

  at(index) {
    let tmp = this.head;
    for (let x = 0; x < index; x++) {
      tmp = tmp.next;
      if (tmp == null) {
        return alert("Node not found.");
      }
    }
    return tmp;
  }

  pop() {
    let size = this.size();
    if (size == 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    let tmp = this.head;
    for (let x = 0; x < size; x++) {
      if (tmp.next == null || tmp.next.next == null) {
        break;
      }
      tmp = tmp.next;
    }
    this.tail = tmp;
    tmp.next = null;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.data == value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let x = 0;
    while (tmp != null) {
      if (tmp.data == value) {
        return x;
      }
      x++;
      tmp = tmp.next;
    }
    return false;
  }

  toString() {
    let size = this.size();
    let tmp = this.head;
    let output = "";
    let newout = "";
    for (let x = 0; x < size; x++) {
      newout = output + `(${tmp.data}) -> `;
      output = newout;
      tmp = tmp.next;
      if (tmp == null) {
        newout = output + "null";
      }
    }
    return newout;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let tmp = this.head;
    for (let x = 0; x < index; x++) {
      if (x === index - 1) {
        newNode.next = tmp.next;
        tmp.next = newNode;
      }
      tmp = tmp.next;
    }
  }

  removeAt(index) {
    let x = 0;
    let tmp = this.head;
    if (index == 0) {
      this.head = tmp.next;
      return;
    }
    while (x < index - 1) {
      tmp = tmp.next;
      x++;
    }
    if (tmp.next.next == null) {
      this.pop();
      return;
    }
    console.log(tmp.next);
    tmp.next = tmp.next.next;
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

export { LinkedList, Node };
