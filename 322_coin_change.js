// top-down
const main = (coins = [1,2,5], amount = 11) => {
  const res = []

  res[0] = 0

  const changeCoin = (coins, amount) => {
    if(amount < 0) return Infinity
    if(res[amount] !== undefined) return res[amount]

    res[amount] = Math.min(...coins.map((coin) => changeCoin(coins, amount-coin))) + 1

    return res[amount]
  }

  changeCoin(coins, amount);

  return res[amount] === Infinity ? -1 : res[amount]
}


// button-top
// const main = (coins = [1,2,5], amount = 11) => {
  // const result = new Array(amount+1).fill(Infinity)

  // result[0] = 0

  // coins.forEach((coin) => {
    // for(let i = coin; i <= amount; i++)
      // result[i] = Math.min(result[i-coin] + 1, result[i])
  // })

  // return result
// }

console.log(main());
