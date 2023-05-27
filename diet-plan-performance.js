/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    let points = 0 
    let sum = 0
    let window = []
    for (let i =0 ; i <  calories.length; i++){ // O(n)
        const cal = calories[i]
        sum += cal 
        window.push(cal)
        if(window.length === k){
            if(sum > upper ) points ++ 
            else if (sum < lower) points -- 
            sum -= window[0]
            window.splice(0,1) // O(k)
        }
    }
    return points 
};

// Runtime: O(n*k) where n = calories.length