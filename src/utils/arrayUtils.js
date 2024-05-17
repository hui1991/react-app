/**
 * 替换或者添加元素
 */
export function replaceOrPush(array, element, comparekey) {
  const result = [...array];
  const i = result.findIndex(
    (item) => item[comparekey] === element[comparekey]
  );
  if (i === -1) {
    result.push(element);
  } else {
    result.splice(i, 1, element);
  }
  return result;
}

/**
 * 替换或者添加数组
 */
export function replaceOrPushArray(array, newArray, comparekey) {
  return newArray.reduce(
    (pre, cur) => replaceOrPush(pre, cur, comparekey),
    array
  );
}

/**
 * 返回数组中最大的元素
 */
export function max(array) {
  return Math.max.apply(null, array);
}

/**
 * 移动数组中指定元素到首位
 */
export function arrayMoveElementsToTop(source, predicate) {
  const index = source.findIndex(predicate);
  // 如果元素存在于数组中
  if (index > -1) {
    // 将元素从原位置删除并插入到数组的第一位
    const move = source.splice(index, 1);
    source.unshift(move[0]);
  } else {
    console.log('数组中未找到指定元素。');
  }
}
