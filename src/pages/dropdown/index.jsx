
import { Fragment, useState } from 'react'
import styles from './index.module.css'


function Dropdown() {

  const [visable, setVisable] = useState(false)

  const onDropDownClick = () => {
    setVisable(true)
  }

  return (
    <Fragment>
      <div
        className={styles.dropdown}
        onClick={onDropDownClick}
      >
        下拉
        {visable && (<div
          className={styles.dropdownContent}
        >

        </div>)}



      </div>
    </Fragment>
  )
}

export default Dropdown