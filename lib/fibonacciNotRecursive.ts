/**
 * Not a recursive algorithm for computing the Fibonacci numbers
 * http://www.docme.ru/doc/1181879/algoritmy-i-struktury-dannyh.-lekciya-1
 * T(n) = O(n)
 * @param {number} n - Number of number of Fibonacci
 * @returns {number}
 */
export function fibonacci(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  let prev = 0; // F(0)
  let current = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const temp = current;
    current += prev; // F(i)
    prev = temp; // F(i-1)
  }

  return current;
}
