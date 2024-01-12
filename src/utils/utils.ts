/**
 * 得到一个两数之间的随机整数，包括两个数在内，含最大值，含最小值
 * Math.random() 返回大于等于0小于1的浮点数，[0,1)
 */
export const getRandomIntInclusive = (min: number, max: number) => {
  // 向上舍入，并返回大于等于给定数字的最小整数
  min = Math.ceil(min);
  // 返回小于等于一个给定数字的最大整数
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
