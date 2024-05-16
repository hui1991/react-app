import { useEffect, useRef, useState } from 'react';
import './index.css';

/**
 * 抽奖转盘
 * 注意useState和useRef的区别
 */
function PrizeWheel() {
  const prizeWheelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const totalStep = 7 * 12;

  const step = useRef(totalStep);

  const preTimeStamp = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(-1);

  const startSpinWheel = () => {
    requestAnimationFrame(spinWheel);
  };

  const spinWheel = (timeStamp) => {
    if (preTimeStamp.current === 0) {
      preTimeStamp.current = timeStamp;
      requestAnimationFrame(spinWheel);
      return;
    }

    const interval = timeStamp - preTimeStamp.current;

    if (interval < 80) {
      requestAnimationFrame(spinWheel);
      return;
    }

    if (step.current === 0) {
      endSpinWheel();
    } else {
      preTimeStamp.current = timeStamp;
      setCurrentIndex(((totalStep - step.current) % 12) + 1);
      step.current--;
      requestAnimationFrame(spinWheel);
    }
  };

  const endSpinWheel = () => {
    console.log('endSpinWheel');
    preTimeStamp.current = 0;
    step.current = totalStep;
    setCurrentIndex(-1);
  };

  return (
    <div className="prize-wheel-page">
      <div className="prize-wheel">
        {prizeWheelList?.map((item) => {
          return (
            <div
              key={item}
              className={`item item${item} ${
                currentIndex === item ? 'item-selected' : ''
              }`}
            >
              <div>{item}</div>
            </div>
          );
        })}
      </div>
      <div className="start" onClick={startSpinWheel}>
        start
      </div>
    </div>
  );
}

export default PrizeWheel;
