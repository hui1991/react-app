
import styles from './index.module.css'
import Tab from "../tab/index"
import { useState } from 'react';

const getMockMenuList = () => {
  console.log(Array.from(new Array(10)))
  return Array.from(new Array(20)).map((item, index) => (`tab${index}`));
}

const mockMenuList = getMockMenuList();

const TabDemo = () => {

  const [content,setContent] = useState(0);

  const onSelect = (value) => {
    setContent(value?.index);
  };

  return (
    <Tab
      menu={mockMenuList}
      onSelect={onSelect}
    >
      {content}
    </Tab>
  )
}

export default TabDemo;