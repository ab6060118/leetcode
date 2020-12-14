function main(nums, target) {
  const ht = {};
  for(i=0;i<nums.length;i++) {
    if(ht[target-nums[i]] !== undefined) return [i, ht[target-nums[i]]];
    ht[nums[i]]=i;
  }
}

console.log(main([2,7,8,9], 9))
