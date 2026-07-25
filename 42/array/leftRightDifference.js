
function leftRightDifference(nums) {
    let sumLeft = 0;
    let sumRight = 0;
    const arr = [];
    for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
    sumRight += nums[j]
    }
    for(let j=i-1; j>=0; j--){
    sumLeft += nums[j]
    } 
    if(sumLeft > sumRight){
        arr.push(-1)
    }else if(sumLeft === sumRight){
        arr.push(0)
    }
        else{
        arr.push(1)
    }
    sumLeft = 0;
    sumRight = 0;
    }
    return arr
}
function sign(num){
    return num > 0 ? 1 : num === 0 ? 0 : -1
}

const nums = [10, 4, 7, 3];
function simpleWay(nums){
    let leftSum = 0;
    let rightSum = nums.reduce((curr, acc) => curr + acc, 0)
    const arr = [];
    for(let i=0; i<nums.length; i++){
     
        rightSum -= nums[i];
        arr.push(sign(rightSum - leftSum))
           leftSum += nums[i]
    }
return arr
}

console.log(simpleWay(nums))