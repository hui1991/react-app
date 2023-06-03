
import { useEffect } from 'react'
import styles from './index.module.css'

const cityList = [
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
  {
    name: "北京",
  },
]

function Flex() {
  return (
    <div className={styles.flexLayout}>
      {
        cityList.map((item, index) => {
          const itemStyle = index === 5 ? styles.itemSelect : styles.item;
          return (
            <div key={index} className={styles.itemLayout}>
              <div style={itemStyle}>
                {
                  item.name
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Flex