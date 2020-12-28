const map = [
  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['', 'M', 'MM', 'MMM'],
]

const main = (num = 1993) => {
  let obj = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let result = '';
  for (let o in obj) {
    result += o.repeat(Math.floor(num/obj[o]));
    num = num % obj[o];
  }
  return result;
}

// const main = (num = 1994) => {
  // let res = ''
  // let index = 0

  // while(num > 0) {
    // res = map[index][num%10] + res
    // num = parseInt(num/10)
    // index++
  // }

  // return res
// }

console.log(main())
