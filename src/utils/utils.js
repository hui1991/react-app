/**
 * 得到一个两数之间的随机整数，包括两个数在内，含最大值，含最小值
 * Math.random() 返回大于等于0小于1的浮点数，[0,1)
 */
export const getRandomIntInclusive = (min, max) => {
  // 向上舍入，并返回大于等于给定数字的最小整数
  min = Math.ceil(min);
  // 返回小于等于一个给定数字的最大整数
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 检查是否支持webp
 */
export const check_webp_feature = (feature, callback) => {
  var kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha:
      'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation:
      'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  };
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(result);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = 'data:image/webp;base64,' + kTestImages[feature];
};
