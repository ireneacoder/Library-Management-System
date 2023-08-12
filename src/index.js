import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Transaction from './Transaction/Transaction';
import Dashboard from './dashboard/dashboard';
import Books from './Books/Books';
import Members from './Members/Members';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Routes>
        
            <Route exact path='/' element={<App/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}>
            <Route exact path="/dashboard" element={ <Navigate to="/dashboard/books" /> } />
                
                <Route exact path='/dashboard/' element={<Books/>}/>
                <Route path='/dashboard/books' element={<Books/>}/>
                <Route path='/dashboard/members' element={<Members/>}/>
                <Route path='/dashboard/transactions' element={<Transaction/>}/>

            </Route>


        </Routes>

    </BrowserRouter>
  
);
