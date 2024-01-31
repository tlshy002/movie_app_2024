// 리액트는 ReactDOM


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App컴포넌트 import

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// 리액트는 최종적으로 단 하나의 컴포넌트만을 가짐
// 그래서 새로 만든 컴포넌트를 App컴포넌트 안에 넣어야 함
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

