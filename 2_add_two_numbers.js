function genList(nums) {
  const head = {}
  let temp = head

  nums.reverse().forEach((a) => {
    const node = {
      value: a,
    }

    temp.next = node
    temp = node
  })

  return head.next
}

function main(l1,l2) {
  const head = {value:0}
  let current = head

  let carry = 0
  while(l1 || l2) {
    sum = carry;
    if(l1) {
      sum += l1.value
      l1 = l1.next
    }
    if(l2) {
      sum += l2.value
      l2 = l2.next
    }
    const temp = {value: sum%10}
    current.next = temp
    current = temp
    carry = sum > 9 ? 1 : 0;
  }
  if(carry) current.next = { value: 1 }


  return head.next
}

// console.log(genList([2,4,3]))
console.log(main(genList([2,4,3]), genList([5,6,4])))
