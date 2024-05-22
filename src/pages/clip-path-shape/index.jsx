import { useEffect, useRef, useState } from 'react';
import './index.css';

/**
 * 通过clip-path来实现shape
 */
function ClipPathShape() {
  return (
    <div className="shape-clip-path-page">
      <div className="hexagon-6-point"></div>
      <div className="hexagon-4-point"></div>
    </div>
  );
}

export default ClipPathShape;
