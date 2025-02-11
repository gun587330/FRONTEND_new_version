import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aaa from './routes/aaa';
import Bbb from './routes/bbb';
import Board from './routes/board1';
import BoardRefactoring from './routes/board2-refactoring';

const 철수의페이지목록 = createBrowserRouter([
  {
    // path에 있는 것은 그냥 우리가 어떤 주소로 설정할 건지 정하는 것이기에 파일명과 꼭 똑같을 필요는 없다!
    // element는 위에 import해줘야 쓸 수 있다는 것을 명심하자.
    path: "/",
    element: <App />,
  },
  {
    path: "/aaa",
    element: <Aaa />,
  },
  {
    path: "/bbb",
    element: <Bbb />,
  },
  {
    path: "/board1",
    element: <Board/>
  },
  {
    path: "/board2-refactoring",
    element: <BoardRefactoring/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={철수의페이지목록} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
