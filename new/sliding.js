const arr = [2, 1, 5, 1, 3, 2]


function maxSubarraySum(arr, k=3){
let windowSum = 0;
let oldWindowSum = 0;
let newWindowSum = 0;

for(let i=0; i<k; i++){
    windowSum += arr[i]
}


let maxSum = windowSum;
oldWindowSum = windowSum

for(let i=k; i<arr.length; i++){
    newWindowSum = oldWindowSum + arr[i] - arr[i-k];
    oldWindowSum = newWindowSum;
    if(newWindowSum > maxSum) {
        maxSum = newWindowSum
    }
}

return {windowSum, oldWindowSum, newWindowSum, maxSum}

}

// console.log(maxSubarraySum(arr))

function maxSubArray2(arr, k=3) {
let windowSum = 0;
let maxSum;
let i = 0;
while(i<k){
windowSum += arr[i]; 
maxSum = windowSum
i++
}

for(let i=k; i<arr.length; i++){
windowSum = windowSum - arr[i-k] + arr[i];
if(maxSum < windowSum){
    maxSum = windowSum
}
}
return maxSum
}
// console.log(maxSubArray2(arr))

function longestSubstring(str='abcabbb'){
   let k=0;
   let longestSubstr = '';

   for(let char in str){
    if(str[char+1] !== str[char]){
        longestSubstr += str[char]
    }
   }
   return longestSubstr
}

console.log(longestSubstring())