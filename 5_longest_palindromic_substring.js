const isP = (s) => {
  const size = s.length

  for(let i = 0; i < Math.floor(size/2); i++) {
    if(s[i] !== s[size-1-i]) return false
  }
  return s
}

const main = (s="babad") => {
  const size = s.length
  let = result = ''

  for(let i = 0; i <= size; i++) {
    for(let j = i + 1; j <= size; j++) {
      const temp = s.slice(i, j)
      if(isP(temp) && temp.length > result.length) result = temp
    }
  }

  return result
}

console.log(main())
