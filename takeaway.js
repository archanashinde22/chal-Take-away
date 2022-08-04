const canWin = (n) => {
  if (n < 2) {
    return false;
  }
  const movesAllowed = [2, 3, 5];

  //it check the win or lose for opponent
  for(let i=0; i<movesAllowed.length ; i++)
  {
    if(canWin(n-movesAllowed[i])===false)
    {
      return true;
    }
  }
  return false;
};

console.log(canWin(1));
console.log(canWin(2));
console.log(canWin(3));
console.log(canWin(4));
console.log(canWin(5));
console.log(canWin(6));
console.log(canWin(7));
console.log(canWin(8));
console.log(canWin(9));
console.log(canWin(10));
// false
