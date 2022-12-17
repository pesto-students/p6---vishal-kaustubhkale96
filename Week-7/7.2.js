var head; // head of list

class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

// This function rotates a linked list counter-clockwise and updates the head
function rotate(k) {
    if (k == 0)
        return;

    var current = head;

    // Traverse till the end
    while (current.next != null)
        current = current.next;

    current.next = head;
    current = head;

    // traverse the linked list to k-1 position which will be last element for rotated array
    for (i = 0; i < k - 1; i++)
        current = current.next;

    // this will update the head_ref and last element pointer to null
    head = current.next;
    current.next = null;
}

// Function to push a node
function push(new_data) {
    var new_node = new Node();
    new_node.data = new_data;
    new_node.next = head;
    head = new_node;
}

// Function to print linked list

function print(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

// Start with the empty list
push(10);
push(20);
push(30);
push(40);
push(50);

console.log("Given linked list");

print(head);  // 50 40 30 20 10

rotate(4);
console.log("First Rotation");
print(head); // 10 50 40 30 20

rotate(4);
console.log("Second Rotation");
print(head); // 20 10 50 40 30

rotate(4);
console.log("Third Rotation");
print(head); // 30 20 10 50 40

rotate(4);
console.log("Fourth Rotation");
print(head); // 40 30 20 10 50

rotate(4);
console.log("Fifth Rotation");
print(head); // 50 40 30 20 10