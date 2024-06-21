import { useEffect, useRef, useState } from 'react';
import './index.scss';

/**
 * 锚点定位
 */
function Anchor() {
  
  useEffect(() => {
    dragElement(document.getElementById('anchor-el-one'));
    dragElement(document.getElementById('anchor-el-two'));
  }, []);

  const dragElement = (element) => {
    console.log('element', element);
    let x = 0;
    let y = 0;
    let xOffset = 0;
    let yOffset = 0;

    element.onmousedown = (event) => {
      event.preventDefault();
      xOffset = event.clientX;
      yOffset = event.clientY;

      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };

      document.onmousemove = (event) => {
        x = xOffset - event.clientX;
        y = yOffset - event.clientY;
        xOffset = event.clientX;
        yOffset = event.clientY;
        element.style.top = `${element.offsetTop - y}px`;
        element.style.left = `${element.offsetLeft - x}px`;
      };
    };
  };

  return (
    <div className="anchor-container">
      <div id="anchor-el-one" className="anchor-el-one">
        one
      </div>
      <div id="anchor-el-two" className="anchor-el-two">
        two
      </div>
      <div className="positioned-notice-mutiple">
        <p>基于多个锚点的定位</p>
      </div>
    </div>
  );
}

export default Anchor;
