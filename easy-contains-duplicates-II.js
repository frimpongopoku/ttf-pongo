/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Run time: O(n)
 */
var containsNearbyDuplicate = function(nums, k) {
    const tracker = {} 
    for(let i = 0; i < nums.length ; i++){
        const value = nums[i]
        const index = tracker[value]
        if (index || index===0){
            let diff = index - i 
            diff = diff < 0 ? diff * -1 : diff 
            if (diff <= k) return true
        }
        tracker[value] = i
    }

    return false
    // O(n)
};