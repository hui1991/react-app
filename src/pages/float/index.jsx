import { useEffect, useRef, useState } from 'react';
import './index.scss';

/**
 * 浮动
 * 浮动元素会导致父布局高度塌陷，可以通过使用BFC（Block Formatting Context）
 * 来解决浮动元素导致的高度塌陷的问题
 */
function Float() {
  return (
    <div className="float-container">
      <div className="box">
        <div className="float">I am a floated box</div>
        <p>I am content inside the container</p>
      </div>
      <div className="box1">
        <div className="float1">I am a floated box</div>
        <p>I am content inside the container清除浮动</p>
      </div>
      <div className="box2"></div>
      <div className="box2"></div>
    </div>
  );
}

export default Float;
