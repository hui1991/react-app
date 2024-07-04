import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

interface ListItem {
  content: string;
  path: string;
}

interface ListProps {
  data: ListItem[];
}

/**
 * 列表组件
 */
export default function List(props: ListProps) {
  const { data } = props;

  const navigate = useNavigate();

  const renderItem = (content: string, path: string, index: number) => {
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

  const renderList = () => {
    return data?.map((item, index) =>
      renderItem(item?.content, item?.path, index)
    );
  };

  return <div className="list-container">{renderList()}</div>;
}
