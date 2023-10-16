import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const homeList = [
  {
    content: '粘性布局',
    path: '/sticky',
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
    content: 'flex',
    path: '/flex',
  },
  {
    content: 'tab',
    path: '/tab',
  },
  {
    content: '居中',
    path: '/center',
  },
  {
    content: 'array',
    path: '/array',
  },
  {
    content: 'test',
    path: '/test',
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
        className={styles.homeListItem}
        onClick={() => {
          navigate(path);
        }}
      >
        {content}
      </div>
    );
  };

  const renderHomeList = () => {
    return homeList.map((item, index) =>
      renderItem(item?.content, item?.path, index)
    );
  };

  return <div className={styles.homeLayout}>{renderHomeList()}</div>;
}

export default Home;
