function fak(n: number): number {
  let res = 1;
  while(n > 0) {
    res *= n;
    n--;
  }
  return res;
}

function climbStairs(n: number): number {

  let amountOfVariantions: number = n % 2 == 0 ? 2 : 1;
  let amountOfTwos = 1;

  while(n - (2 * amountOfTwos) > 0) {

    amountOfVariantions += fak(amountOfTwos + (n-2*amountOfTwos)) / (fak(amountOfTwos) * fak((n-2*amountOfTwos)))
    amountOfTwos++;
  }

  return amountOfVariantions;
};o
