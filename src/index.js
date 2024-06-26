import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import roots from './routes/route';
import { check_webp_feature } from './utils/utils';
import './index.css';
import 'normalize.css';

/**
 * 检查是否支持webp
 */
check_webp_feature('lossy', function (isWebpSupported) {
  console.log('isWebpSupported =',isWebpSupported)
  if (!isWebpSupported) {
    var htmlNode = document.querySelector('html');
    htmlNode.setAttribute('class', 'webp_not_supported');
  }
});

const router = createBrowserRouter(roots);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
