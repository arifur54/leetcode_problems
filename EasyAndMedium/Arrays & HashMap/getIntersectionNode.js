
// LeetCode Question #: 160

// Definition for singly-linked list node.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to find the intersection node of two singly-linked lists
var getIntersectionNode = function(headA, headB) {
    // loop over currentANode && loop over currentBNode; 
    let currentANode = headA;
    let currentBNode = headB;
    let newMap = new Map()
    while(currentANode !== null){
        newMap.set(currentANode)
        currentANode = currentANode.next;
    }

    while(currentBNode !== null){
        if(newMap.has(currentBNode)){
            return currentBNode;
        }
        currentBNode = currentBNode.next;
    }
    
    return null;
};


    //  n^2 solution

    //  // loop over currentANode && loop over currentBNode; 
    //  while(headB !== null){
    //     let currentANode = headA;
    //     while(currentANode !== null){
    //         if(currentANode === headB){
    //             // must return the pointer;
    //             return headB
    //         }
    //         currentANode = currentANode.next;
    //     }
    //     headB = headB.next
    // }
    // return null;



// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let currentNode = head;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
    }
    return head;
}

// Helper function to print the linked list (for debugging)
function printLinkedList(head) {
    let currentNode = head;
    let result = [];
    while (currentNode !== null) {
        result.push(currentNode.val);
        currentNode = currentNode.next;
    }
    console.log(result.join(' -> '));
}

// Helper function to get the node at a specific index
function getNodeAt(head, index) {
    let currentNode = head;
    for (let i = 0; i < index; i++) {
        if (currentNode === null) return null;
        currentNode = currentNode.next;
    }
    return currentNode;
}

// Test case setup
let listA = createLinkedList([4,1,8,4,5]);
let listB = createLinkedList([5,6,1,8,4,5]);
let intersectionNode = getNodeAt(listA, 2); // The node with value 8

// Create the intersection
let lastNodeB = getNodeAt(listB, 2); // The node with value 1 in listB
lastNodeB.next = intersectionNode; // Pointing last node of B to the intersection node

// Uncomment below to print the lists (for debugging)
// printLinkedList(listA); // Expected output: 4 -> 1 -> 8 -> 4 -> 5
// printLinkedList(listB); // Expected output: 5 -> 0 -> 1 -> 8 -> 4 -> 5

// Test the function
let result = getIntersectionNode(listA, listB);
console.log(result ? result.val : null);
  