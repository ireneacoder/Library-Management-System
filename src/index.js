import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Transaction from './Transaction/Transaction';
import Dashboard from './dashboard/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<App/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>

    </BrowserRouter>
  
);
