import { replaceOrPush, replaceOrPushArray } from '../../utils/arrayUtils';

const Array = () => {
  const array1 = [
    {
      id: 1,
      name: '张三',
    },
    {
      id: 2,
      name: '李四',
    },
    {
      id: 3,
      name: '牛头',
    },
  ];

  const array2 = [
    {
      id: 1,
      name: '张四',
    },
    {
      id: 2,
      name: '李三',
    },
    {
      id: 6,
      name: '牛头',
    },
  ];

  const test = () => {
    console.log('array1', array1);

    const result1 = replaceOrPush(array1, { id: 3, name: '马面' }, 'id');
    console.log('result1', result1);

    const result2 = replaceOrPush(array1, { id: 4, name: '王朝' }, 'id');
    console.log('result2', result2);
    console.log('array1', array1);


    const result3 = replaceOrPushArray(array1, array2, 'id');
    console.log('result3', result3);

  }

  return (
    <div>
      array
      {
        test()
      }
    </div>
  )
}

export default Array;