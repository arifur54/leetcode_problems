
// LeetCode Question #: 876
// Definition for singly-linked list.

class ListNode{
    constructor(val = 0, next = null){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
   
}


function createLinkedList(head){
    const root = new ListNode(head[0])
    let current = root;
    for(let i = 1; i < head.length; i++){
        current.next = new ListNode(head[i])
        current = current.next
    }
    return root
}

function middleNode(head2){
    let firstNode = head2;
    let nextNodes = head2;
    while(nextNodes && nextNodes.next){
       
        firstNode = firstNode.next;
        nextNodes = nextNodes.next.next;
    }
    return firstNode
}


function middleNode2(head2){
    length = 0;
    current = head2;
    while(current != null){
        length++;
        current = current.next;
    }

    current = head2;
    center = Math.floor(length / 2);

    while(center > 0){
        center--;
        current = current.next;
    }
    return current;

}



const head = [1,2,3,4]
let head2 = createLinkedList(head)
console.log(middleNode(head2));
console.log(middleNode2(head2));
