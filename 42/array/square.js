const nums = [-4,-1,0,3,10]

function sortedSquares(nums){
let left = 0;
let right = nums.length - 1;
let index = nums.length - 1;
const newarr = []

while(left <= right){
    if(Math.abs(nums[left]) < Math.abs(nums[right])){
    newarr[index] = nums[right] ** 2
    right--
    index--
    }else{
    newarr[index] = nums[left] ** 2
    left++  
    index-- 
    }
}
return newarr
}

function square(nums){

    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    const arr = []

    while(left <= right){
        if(nums[left]**2 > nums[right]**2){
            arr[index] = nums[left]**2;
            left++;
            index--
        }else{
            arr[index] = nums[right]**2;
            right--;
            index--;
        }
    }

    return arr
  
}

console.log(square(nums))