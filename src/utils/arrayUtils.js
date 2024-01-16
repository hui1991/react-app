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
