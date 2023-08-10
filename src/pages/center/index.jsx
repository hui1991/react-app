import styles from './index.module.css'


/**
 * 居中
 */
function Center() {
  return (
    <div>
      <div className={styles.center1}>
        text-align水平居中
      </div>
      <div className={styles.center2}>
        line-height垂直居中
      </div>
      <div className={styles.center3}>
        <div>flex布局</div>
      </div>
      <div className={styles.center4}>
        <div className={styles.center41}>
          居中
        </div>
      </div>
    </div>
  )
}

export default Center