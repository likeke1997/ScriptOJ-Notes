const addClass = (dom, name) => {
  dom.className += ` ${name}`;
}

const removeClass = (dom, name) => {
  let classNames = dom.className.split(' ');
  let classIndex = classNames.indexOf(name);
  if (classIndex != -1) {
    classNames.splice(classIndex, 1)
    if (classNames.length > 0) {
      dom.className = classNames.join(' ');
    }
  }
}

const hasClass = (dom, name) => {
  let classNames = dom.className.split(' ');
  let classIndex = classNames.indexOf(name);
  return classIndex != -1;
}