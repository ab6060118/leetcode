const main = (nums = [-1,0,1,2,-1,-4]) => {
  const res = []
  nums = nums.sort((a,b) => {
    if(a>b) return 1
    if(a<b) return -1
    return 0
  })

  for(let i = 0; i < nums.length-2; i++) {
    if(nums[i] > 0) break;
    for(let j = i + 1; j < nums.length-1; j++) {
      if(nums[i] + nums[j] > 0) break;
      for(let k = j + 1; k < nums.length; k++)
        if(nums[i] + nums[j] + nums[k] === 0) res.push([nums[i], nums[j], nums[k]])
    }
  }

  return res
}

console.log(main())
