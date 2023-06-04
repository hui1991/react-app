
import { useState, useEffect } from 'react';
import styles from './index.module.css'

function Tab(props) {

  const { menu, children,onSelect } = props;

  const [menuList, setMenuList] = useState(menu);

  useEffect(() => {
    const result = menuList?.map((item, index) => ({
      index,
      value: item,
      select: index === 0
    }));
    setMenuList(result);
  }, [])

  const onMenuItemClick = (item) => {
    const result = menuList?.map(i => ({ ...i, select: item.index === i.index }));
    setMenuList(result);
    onSelect(item);
  };

  const renderMenuItem = (item, index) => {
    const itemStyle = item?.select ? styles.menuItemSelect : styles.menuItem;
    return (
      <div
        key={item?.index | index}
        className={itemStyle}
        onClick={() => { onMenuItemClick(item) }}
      >
        {item?.value}
      </div>
    )
  }

  return (
    <div className={styles.tabLayout}>
      <div className={styles.menuLayout}>
        {
          menuList.map((item, index) => {
            return renderMenuItem(item, index)
          })
        }
      </div>
      <div className={styles.contentLayout}>
        {children}
      </div>
    </div>
  )
}

export default Tab