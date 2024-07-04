import { useNavigate } from 'react-router-dom';
import List from '@/components/list';
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
  return (
    <div className="home-page">
      <List data={homeList}></List>
    </div>
  );
}

export default Home;
