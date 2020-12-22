const main = (nums1 = [1,2], nums2 = [3,4]) => {
  let index1 = 0;
  let index2 = 0;
  const len = nums1.length + nums2.length
  const merged = []

  if(len === 0) return 0

  while(nums1[index1] !== undefined || nums2[index2] !== undefined) {
    if((nums2[index2] === undefined && nums1[index1] !== undefined) || (nums1[index1] !== undefined && nums1[index1] <= nums2[index2])) {
      merged.push(nums1[index1])
      index1 += 1
    }
    if((nums1[index1] === undefined && nums2[index2] !== undefined) || (nums2[index2] !== undefined && nums1[index1] >= nums2[index2])) {
      merged.push(nums2[index2])
      index2 += 1
    }
  }

  return merged.length % 2 ? merged[Math.floor(merged.length/2)] : (merged[merged.length/2] + merged[merged.length/2-1])/2
}

console.log(main())
