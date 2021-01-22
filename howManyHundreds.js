function howManyHundreds(num) {
  if (num % 100 === 0){
    let ans = num / 100
    return ans
  } else {
    let ans1 = Math.floor((num / 100))
    return ans1
  }

  
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);