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