const main = (strs = ["cir","car"]) => {
  if(strs.length === 0) return ''
  let res = ''

  for(let i = 0; i < strs[0].length; i++) {
    if(strs.some(s => s[i] !== strs[0][i])) break
    res += strs[0][i]
  }

  return res
}

console.log(main())
