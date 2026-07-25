const nums = [1,8,6,2,5,4,8,3,7]
function maxArea(nums){
   let left = 0;
   let right = nums.length - 1;
   let area = 0;
   let maxArea = area;

   while(left < right){
   if(nums[left] > nums[right]){
   area = (right - left) * (nums[right] < nums[left] ? nums[right] : nums[left]);
   maxArea = maxArea > area ? maxArea : area
   right--
   }else{
   area = (right - left) * (nums[right] < nums[left] ? nums[right] : nums[left]);
   maxArea = maxArea > area ? maxArea : area
   left++
   }
   }

   return maxArea

}

console.log(maxArea(nums))