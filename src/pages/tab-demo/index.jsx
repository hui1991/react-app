
import styles from './index.module.css'
import Tab from "../tab/index"
import { useState } from 'react';

const getMockMenuList = () => {
  console.log(Array.from(new Array(10)))
  return Array.from(new Array(20)).map((item, index) => (`tab${index}`));
}

const mockMenuList = getMockMenuList();

const TabDemo = () => {

  const [content, setContent] = useState(0);

  const onSelect = (value) => {
    setContent(value?.index);
  };

  return (
    <div className={styles.tabDemo}>
      <div className={styles.upContentLayout}>
        <div>
          title
        </div>
        <div className={styles.upContent}>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>
          <div>
            upContent
          </div>

        </div>
      </div>
      <Tab
        menu={mockMenuList}
        onSelect={onSelect}
      >
        {content}
      </Tab>


    </div>
  )
}

export default TabDemo;