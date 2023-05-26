/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    nums.sort((a,b)=> a - b) 
    
    let min = 100000
    for (let left =0 ; left < nums.length; left++){
        let num = nums[left]
        let right = left + k
        if (right  <= nums.length){
            let diff = num - nums[right-1]
            diff = diff < 0 ? diff * -1 : diff 
            min = min < diff ? min : diff 
        }

    }

     return min
  
};