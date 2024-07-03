import { useNavigate } from 'react-router-dom';
import './index.scss';

const homeList = [
  {
    content: '定位和布局',
    path: '/layout',
  },
  {
    content: 'use-effect',
    path: '/use-effect',
  },
  {
    content: 'dropdown',
    path: '/dropdown',
  },
  {
    content: 'array',
    path: '/array',
  },
  {
    content: 'test',
    path: '/test',
  },
  {
    content: 'modal',
    path: '/modal',
  },
  {
    content: '滚动穿透',
    path: '/pointerEvents',
  },
  {
    content: '抽奖转盘',
    path: '/prizeWheel',
  },
  {
    content: 'shape',
    path: '/clip-path-shape',
  },
  {
    content: 'gradient-text',
    path: '/gradient-text',
  },
  {
    content: 'ellipsis',
    path: '/ellipsis',
  },
];

/**
 * 首页
 */
function Home() {
  const navigate = useNavigate();

  const renderItem = (content, path, index) => {
    return (
      <div
        key={index}
        className="list-item"
        onClick={() => {
          navigate(path);
        }}
      >
        <div className="content">{content}</div>
      </div>
    );
  };

  const renderHomeList = () => {
    return homeList.map((item, index) =>
      renderItem(item?.content, item?.path, index)
    );
  };

  return (
    <div className="home-page">
      <div className="list-container">{renderHomeList()}</div>
    </div>
  );
}

export default Home;
