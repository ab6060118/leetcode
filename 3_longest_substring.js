function main(s) {
  let start = 0
  let max = 0
  const ss = s.split('')
  ss.forEach((sss, i) => {
    const substring = s.slice(start, i)
    if(substring.indexOf(sss) > -1) start = substring.indexOf(sss) + 1 + start
    if(i - start > max - 1) max = i - start + 1
  })
  return max
}

console.log(main("abcabcbb"))
