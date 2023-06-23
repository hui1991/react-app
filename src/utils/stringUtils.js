
/**
 * 对比版本号
 */
export const compareVersion = (version1, version2) => {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const maxLenght = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLenght; i += 1) {
    const v1 = i < arr1.length ? parseInt(arr1[i], 10) : 0;
    const v2 = i < arr2.length ? parseInt(arr2[i], 10) : 0;
    if (v1 > v2) {
      return 1;
    }
    if (v1 < v2) {
      return -1;
    }
  }
  return 0;
};