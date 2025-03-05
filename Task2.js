const readline = require('readline');

// Singly Linked List Node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to create a linked list from an array
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Function to remove nodes from the linked list if they exist in the array
function removeNodes(head, valuesToRemove) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy, current = head;

    let removeSet = new Set(valuesToRemove);

    while (current) {
        if (removeSet.has(current.value)) {
            prev.next = current.next; // Remove node
        } else {
            prev = current;
        }
        current = current.next;
    }

    return dummy.next; // Return modified list
}

// Function to print the linked list
function printLinkedList(head) {
    let result = [];
    let current = head;

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    console.log("Modified Linked List:", result);
}

// Read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter linked list values  ", (listInput) => {
    let linkedListArray = listInput.split(",").map(Number);

    rl.question("Enter input array to delete): ", (removeInput) => {
        let removeArray = removeInput.split(",").map(Number);

        // Create linked list
        let linkedList = arrayToLinkedList(linkedListArray);

        // Remove values
        let modifiedList = removeNodes(linkedList, removeArray);

        // Print modified list
        printLinkedList(modifiedList);

        rl.close();
    });
});
