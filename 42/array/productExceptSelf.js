const nums = [1,2,3,4];
 function productExceptSelf (nums){
    const n = nums.length;
    const res = new Array(n).fill(1);
    console.log(res)
    // First pass: Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;  // [1,1,2,6]
        console.log(res)
        prefix *= nums[i];
    }
    
    // Second pass: Multiply by postfix products
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    
    return res;
};

console.log(productExceptSelf(nums))