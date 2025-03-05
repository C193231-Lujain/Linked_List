const readline = require('readline');

// Doubly Linked List Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Function to convert an integer to a doubly linked list
function integerToDLL(n) {
    let isNegative = n < 0; // Check if the number is negative
    let numStr = Math.abs(n).toString(); // Convert number to string

    let head = new Node(numStr[0]);
    let current = head;

    for (let i = 1; i < numStr.length; i++) {
        let newNode = new Node(numStr[i]);
        current.next = newNode;
        newNode.prev = current;
        current = newNode;
    }

    // If negative, prepend a '-' node
    if (isNegative) {
        let negativeNode = new Node("-");
        negativeNode.next = head;
        head.prev = negativeNode;
        head = negativeNode;
    }

    return head;
}

// Function to convert a doubly linked list to an integer
function DLLToInteger(head) {
    let numStr = "";
    let current = head;

    while (current) {
        numStr += current.value;
        current = current.next;
    }

    return parseInt(numStr); // Convert string to integer
}

// Function to print the linked list
function printDLL(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log("first function:", result.join(" <-> "));
}

// Read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (input) => {
    let number = parseInt(input);

    // Convert integer to Doubly Linked List
    let dllHead = integerToDLL(number);
    printDLL(dllHead);

    // Convert back to integer
    let reconstructedNumber = DLLToInteger(dllHead);
    console.log("second function:", reconstructedNumber);

    rl.close();
});


