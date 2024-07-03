import './index.scss';

const cityList = [
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
  {
    name: '北京',
  },
];

function Flex() {
  return (
    <div className="flexLayout">
      {cityList.map((item, index) => {
        const itemStyle = index === 5 ? 'itemSelect' : 'item';
        return (
          <div key={index} className="itemLayout">
            <div className={itemStyle}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Flex;
