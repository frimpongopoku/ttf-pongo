/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    const size = 3 // k
    let count = 0
    for(let i = 0; i < s.length; i++ ){ // O(n)
        const fixedWindow = s.slice(i, i+size) // O(k)
        let reduced = new Set(fixedWindow) // O(k)
        if(reduced.size === size) count++; 
    }
    return count
};

/**
    Where n = the number of letters in the given string (s)
    k = the size of the window 
    The Run time is 
    O(n) x [ O(k) + (k)]
    = O(n) x O(k)
    = O(n*k)


 */