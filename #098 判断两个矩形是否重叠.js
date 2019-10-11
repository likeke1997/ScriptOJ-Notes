const isOverlap = (rect1, rect2) => {
  let inTop = (rect1.y - rect2.y - rect2.height) > 0;
  let inRight = (rect2.x - rect1.x - rect1.width) > 0;
  let inBottom = (rect2.y - rect1.y - rect1.height) > 0;
  let inLeft = (rect1.x - rect2.x - rect2.width) > 0;
  return !(inTop || inRight || inBottom || inLeft);
}