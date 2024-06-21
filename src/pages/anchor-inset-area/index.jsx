import { useEffect, useRef, useState } from 'react';
import './index.scss';

/**
 * 锚点定位
 */
function Anchor() {
  const insetAreaList = [
    {
      key: 'top left',
      value: 'top left',
    },
    {
      key: 'top span-left',
      value: 'top span-left',
    },
    {
      key: 'top center',
      value: 'top center',
    },
    {
      key: 'top span-right',
      value: 'top span-right',
    },
    {
      key: 'top right',
      value: 'top right',
    },
    {
      key: 'bottom left',
      value: 'bottom left',
    },
    {
      key: 'bottom span-left',
      value: 'bottom span-left',
    },
    {
      key: 'bottom center',
      value: 'bottom center',
    },
    {
      key: 'bottom span-right',
      value: 'bottom span-right',
    },
    {
      key: 'bottom right',
      value: 'bottom right',
    },
  ];

  const [insetArea, setInsetArea] = useState('top');

  const onInsetAreaOptionClick = (item) => {
    setInsetArea(item?.value);
  };

  return (
    <div className="anchor-container">
      {insetAreaList?.map((item) => {
        return (
          <div
            className="inset-area-option"
            onClick={() => {
              onInsetAreaOptionClick(item);
            }}
          >
            {item?.key}
          </div>
        );
      })}
      <div className="anchor-el-inset-area"></div>
      <div
        id="positioned-notice-inset-area"
        key={key}
        style={{ insetArea: insetArea }}
        className="positioned-notice-inset-area"
      >
        element
      </div>
    </div>
  );
}

export default Anchor;
