
// LeetCode Question #: 206
class ListNode{
    constructor(val = 0, next = null){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
   
}


function reversedList(head) {
    let currentNode = head;
    let prevNode = null;

    while(currentNode !== null){
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    return prevNode

}


function reversedListRecursive(head) {  
    // base case
    if(!head || !head.next){
        return head
    }

    const newHead = reversedListRecursive(head.next)
    head.next.next = head;
    head.next = null;
    return newHead;

}


function createLinkedList(arr){
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for(let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i])
        current = current.next;
    }

    return head;
}

let head = createLinkedList([1,2,3,4,5])
console.log(reversedListRecursive(head));

