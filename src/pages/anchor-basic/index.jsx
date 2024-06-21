import { useEffect, useRef, useState } from 'react';
import './index.scss';

/**
 * 锚点定位
 */
function Anchor() {
  return (
    <div className="anchor-container">
      <div className="anchor-el"></div>
      <div className="positioned-notice">element</div>

      <div className="anchor-el-1"></div>
      <div className="positioned-notice-1">element</div>

      <div className="anchor-el-2"></div>
      <div className="positioned-notice-2">element</div>
    </div>
  );
}

export default Anchor;
