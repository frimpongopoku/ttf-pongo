/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 * O(n*k)
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0 
    let sum = 0
    const window = [] 

    for(let i =0 ; i < arr.length ; i++){ //O(n)
        const number = arr[i]
        window.push(number)
        sum +=number 
        if (window.length === k){
            const average = sum/k 
            if(average >= threshold) count ++
            const first = window[0]
            window.splice(0,1)// O(k)
            sum -=first
        }

    }

    return count
    
};