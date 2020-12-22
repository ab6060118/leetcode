const main = (n = 10) => {
  if(n === 0) return 0
  if(n === 1) return 1

  return main(n-1) + main(n-2)
}

console.log(main())
