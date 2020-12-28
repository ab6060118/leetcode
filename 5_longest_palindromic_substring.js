// around
const main = (s = 'babd') => {

  const around = (ss,e) => {
    while(s[ss] === s[e]) {
      ss++
      e--
    }
    return e-ss
  }

  let start = 0
  let end = 0

  for(let i = 0; i < s.length; i++) {
    const len = Math.max(around(i,i), around(i,i+1))

    if(len > max) {
      start = i - Math.floor(len/2)
      end = i + Math.floor(len/2)
    }
  }

  return s.substring(start, end)
}


// DP
// const main = (s = 'babad') => {
  // if(s.length === 0) return ''

  // const res = new Array(s.length)
  // let longest = 0
  // let start = 0
  // let end = 0

  // for(let i = 0; i < s.length; i++) {
    // res[i] = new Array(s.length).fill(undefined)
    // res[i][i] = true
  // }

  // const f = (i,j) => {
    // if(i > j) return true;
    // if(res[i][j] !== undefined) return res[i][j]

    // if(s[i] === s[j]) res[i][j] = f(i+1, j-1)
    // else res[i][j] = false
    // f(i, j-1)
    // f(i+1, j)

    // if(res[i][j] === true)
      // if(j - i > longest) {
        // longest = j - i
        // start=i
        // end=j
      // }

    // return res[i][j]
  // }

  // f(0, s.length - 1)

  // return s.slice(start,end+1)
// }


// brute force
// const isP = (s) => {
  // const size = s.length

  // for(let i = 0; i < Math.floor(size/2); i++) {
    // if(s[i] !== s[size-1-i]) return false
  // }
  // return s
// }

// const main = (s="babad") => {
  // const size = s.length
  // let = result = ''

  // for(let i = 0; i <= size; i++) {
    // for(let j = i + result.length; j <= size; j++) {
      // const temp = s.slice(i, j)
      // if(isP(temp) && temp.length > result.length) result = temp
    // }
  // }

  // return result
// }

// main().map(i=>console.log(i))

console.log(main())
