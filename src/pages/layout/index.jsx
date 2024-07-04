import { useNavigate } from 'react-router-dom';
import List from '@/components/list';
import './index.scss';

const layoutList = [
  {
    content: '居中',
    path: '/layout/center',
  },
  {
    content: '粘性布局',
    path: '/layout/sticky',
  },
  {
    content: 'flex',
    path: '/layout/flex',
  },
  {
    content: 'tab',
    path: '/layout/tab',
  },
  {
    content: 'float',
    path: '/layout/float',
  },
  {
    content: 'anchor-basic',
    path: '/layout/anchor-basic',
  },
  {
    content: 'anchor-multi',
    path: '/layout/anchor-multi',
  },
  {
    content: 'anchor-inset-area',
    path: '/layout/anchor-inset-area',
  },
  {
    content: 'anchor-demo',
    path: '/layout/anchor-demo',
  },
];

/**
 * 定位和布局
 */
const Layout = () => {
  return (
    <div className="layout-page">
      <List data={layoutList}></List>
    </div>
  );
};

export default Layout;
