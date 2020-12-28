const main = (x=12321) => {
  if(x < 0 || (x !== 0 && x % 10 === 0)) return false
  let clone = x
  let reverse = 0

  while(clone) {
    reverse = reverse * 10 + clone % 10
    clone = Math.floor(clone / 10)
  }

  return x === reverse
}

console.log(main())
