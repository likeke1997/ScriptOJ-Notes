/*
题目：#100 把数字转换成中文
地址：http://scriptoj.mangojuice.top/problems/100
要求：完成 toChineseNum，可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回“一万二千三百四十五”。
*/

const toChineseNum = (num) => {
  const digits = '零一二三四五六七八九';
  const units = ' 十百千';
  let numArr = num.toString().split("").reverse();
  let resArr = ['', '']; // [万以下，万及万以上]
  numArr.map((val, index) => {
    let resIndex = Math.floor(index / 4);
    let partNew = (digits[val] + units[index % 4]).replace(/零./, '零');
    resArr[resIndex] = partNew + resArr[resIndex];
  })
  resArr.map((val, index, arr) => {
    arr[index] = val.replace(/零+$/, '').replace(/零{2,}/g, '零').replace(/\s/g, '');
  })
  return `${resArr[1]}万${resArr[0]}`;
}