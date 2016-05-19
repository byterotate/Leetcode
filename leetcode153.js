/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length==1){
        return nums[0]
    }
    if(nums.length==2){
        return nums[0]<nums[1]?nums[0]:nums[1]
    }
    mid = Math.floor(nums.length/2);
    if(nums[mid]>nums[nums.length-1]){
        return arguments.callee(nums.slice(mid+1));
    }else{
        return arguments.callee(nums.slice(0,mid+1));
    }
    
   
};
