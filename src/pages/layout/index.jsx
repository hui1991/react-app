import { useNavigate } from 'react-router-dom';
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
 * 布局
 */
const Layout = () => {
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
    return layoutList.map((item, index) =>
      renderItem(item?.content, item?.path, index)
    );
  };

  return (
    <div className="layout-page">
      <div className="list-container">{renderHomeList()}</div>
    </div>
  );
};

export default Layout;
