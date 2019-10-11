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