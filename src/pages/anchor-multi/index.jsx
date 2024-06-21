import { useEffect, useRef, useState } from 'react';
import './index.scss';

/**
 * 锚点定位
 */
function Anchor() {
  return (
    <div className="anchor-container">
      <div className="anchor-el-one">one</div>
      <div className="anchor-el-two">two</div>
      <div className="positioned-notice-mutiple">
        <p>基于多个锚点的定位</p>
      </div>
    </div>
  );
}

export default Anchor;
