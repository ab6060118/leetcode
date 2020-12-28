// 找出 z 字型的最小規律，一豎一勾

const main = (s = 'PAYPALISHIRING', numRows = 2) => {
  if(numRows === 1) return s

  const result = new Array(numRows).fill('')
  const n = 2 * numRows - 2

  for( let i in s ) {
    const k = i%n
    if(i % n >= numRows) result[2 * numRows - k - 2] += s[i]
    else result[k] += s[i]
  }

  return result.join('')
}

console.log(main())
