/*
题目：#102 记忆化斐波那契函数（Memoization）
地址：http://scriptoj.mangojuice.top/problems/102
要求：见题目地址。
*/

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