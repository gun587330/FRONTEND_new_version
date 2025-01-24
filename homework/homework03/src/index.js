import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BoardsNew from './routes/boards/new/BoardsNew.js';
import BoardsDetail from './routes/boards/detail/BoardsDetail.js';


const MainPage = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/boards/new",
    element: <BoardsNew />,
  },
  {
    path: "/boards/detail",
    element: <BoardsDetail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> : 페이지 구동 전에 에러 더블 체크 해주는 기능이라 빼도 됨.
  <React.StrictMode>
    <RouterProvider router={MainPage} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
