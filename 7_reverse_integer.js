const main = (x=-123) => {
  let res = parseInt(x.toString().split('').reverse().join(''),10)
  if(res > 2**31-1) return 0
  if(x < 0) res = -res
  return res
}

console.log(main())
