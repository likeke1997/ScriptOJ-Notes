const fibonacci = (n) => {
  const fib = (prev, next, count) => {
    if (count === 0) {
      return prev
    } else {
      return fib(next, prev + next, count - 1)
    }
  }
  return fib(0, 1, n)
}