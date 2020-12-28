// 兩端指標逼近
const main = (height = [1,8,6,2,5,4,8,3,7]) => {
  let i1 = 0
  let i2 = height.length - 1
  let max = 0

  while(i1 !== i2) {
    max = Math.max(Math.min(height[i1], height[i2]) * (i2 - i1), max)
    if(height[i1] > height[i2]) i2--
    else i1++
  }

  return max
}

// brute force
// const main = (height = [1,8,6,2,5,4,8,3,7]) => {
  // let max = 0

  // height.forEach((h, i) => {
    // for(let j = i + 1; j < height.length; j++) {
      // max = Math.max(Math.min(h, height[j]) * (j - i), max)
    // }
  // })

  // return max
// }

console.log(main())
