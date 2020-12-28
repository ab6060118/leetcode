const main = (s = 'MCMXCIV') => {
  let res = 0
  const map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  for(let i = s.length - 1; i >= 0; i--) {
    if(map[s[i]] < map[s[i+1]]) res -= map[s[i]]
    else res += map[s[i]]
  }


  return res
}

console.log(main())
