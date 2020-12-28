const main = (s = '-91283472332') => {
  const MAX = 2 ** 31 - 1
  const MIN = (-2) ** 31
  let res = parseInt(s)

  if(isNaN(res)) return 0
  if(res > MAX) return MAX
  if(res < MIN) return MIN

  return res
}

console.log(main())
