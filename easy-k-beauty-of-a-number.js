/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let count = 0 
    let str = num.toString() 
    let window = []

    for (let i =0;  i < str.length; i++){
        const item = str[i]
        window.push(item) 
        if(window.length === k){
            let number = window.join("")
            console.log("We see number", number)
            number = Number(number)
            const mod = num % number
            if(number !== 0 && mod === 0) count ++
            window.splice(0,1)
        }
    }

    return count
};