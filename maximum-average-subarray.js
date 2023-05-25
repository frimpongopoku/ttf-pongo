/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: O(n*k)
 * Link is here: https://leetcode.com/problems/maximum-average-subarray-i/description/
 */
var findMaxAverage = function(nums, k) {
    let max =-10001;
    let sum =0; 
    let tracker = []
    for (let i = 0; i < nums.length ; i++){
        const num = nums[i]
        sum+=num 
        tracker.push(num)
        if(tracker.length === k){
            const average = sum/k
            max = max  > average ? max : average 
            const first = tracker[0]
            tracker.splice(0,1)
            sum-=first
        }
       
    }

    return max
};