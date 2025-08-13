import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route} from "react-router-dom";
import './index.css';
import Home from './Components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);


