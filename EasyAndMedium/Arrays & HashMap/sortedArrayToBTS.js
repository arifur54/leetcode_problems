// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

// LeetCode Question #: 108
nums = [-10,-3,0,5,9]

function sortedArrayToBTS(nums) {
    let center = Math.floor(nums.length / 2)
    let root = nums[center]

    let leftRootNode = new TreeNode(root)
    console.log(nums[leftRootNode.val + 1])
    // for(let num of nums){
        
    // }
}

console.log(sortedArrayToBTS(nums));


