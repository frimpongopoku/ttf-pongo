/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * Runtime: O(n*k)
 */
var minimumRecolors = function(blocks, k) {
    let max_black = 0  
    const tracker = []
    let count =0
    for(let i = 0; i < blocks.length; i++){
        const block = blocks[i]
        tracker.push(block)
        if (block === "B") count++ 
        if (tracker.length === k) { 
            max_black = max_black > count ? max_black : count 
            const first = tracker[0]
            tracker.splice(0,1)
            if(first === "B") count-- 
        }
    }

    return k - max_black
};