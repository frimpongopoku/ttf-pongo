/**
 * @param {number[]} nums
 * @return {number}
 * Run time:   O(n)
 */
var longestSubarray = function(nums) {
    const tracker = [] 
     let count = 0
     for (let i =0 ; i < nums.length ; i++){ // O(n)
         const value = nums[i]
         if (value === 1){ 
             count ++ 
             const lastItemInLoop = (nums.length -1) === i
             const nothingIsRecordedYet = !tracker.length
             if (lastItemInLoop){
                 if(nothingIsRecordedYet){
                   count--
                   tracker.push(count)
                 }else tracker.push(count)
             }
         }
         else { 
           tracker.push(count)
           count = 0
         } 
     }
 
   if(tracker.length === 1 ) return tracker[0]
 
   let longest = 0 
   let sum =0 
   let window = []
     for (let i =0 ; i < tracker.length; i++){ //O(k)
         const value = tracker[i]
         sum += value 
         window.push(value)
         if(window.length === 2){
             longest = longest > sum ? longest : sum 
             sum -=window[0] 
             window.splice(0,1)
         }
     }
   return longest 
 
 
   /**
     O(n) + O(k)
     O(n)
   
    */
 
 
 
 
 
 
 };