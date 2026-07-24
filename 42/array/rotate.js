const nums = [1,2,3,4,5,6,7]

function rotate(nums, k){
const n = nums.length;
k%n

reverse(nums, 0, nums.length - 1);

reverse(nums, k, nums.length - 1);

reverse(nums, 0, k-1)

return nums;
// reverse array
}

function reverse(nums, left, right){
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--;
    }
}

// console.log(rotate(nums, 7))

function generatePascal(numRows){
    const result = []
    if(numRows === 0) return result;

    for(let i=0; i<numRows; i++){
        const row = [];
        for(let j=0; j<=i; j++){
            if(j===0 || j===i){
                row.push(1)
            }else{
                let leftAbove = result[i-1][j-1]
                let rightAbove = result[i-1][j]
                row.push(leftAbove + rightAbove)
            }
        }
        result.push(row)
    }
    return result
}

console.log(generatePascal(5))