/*
题目：#101 解析字串
地址：http://scriptoj.mangojuice.top/problems/101
要求：见题目地址。
*/

const extractStr = (str) => {
  let res = str.match(/(:+)((\w+)|())(\.+)/g);
  if (res instanceof Array) {
    res.map((val, index, arr) => {
      arr[index] = val.replace(/(:+)((\w+)|())(\.+)/, '$2');
    });
    return res;
  } else {
    return [];
  }
}