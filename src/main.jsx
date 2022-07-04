import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowseRouter, Routes, Route } from 'react-router-dom';
import Invoices from './routes/Invoices';
import Expenses from './routes/Expenses';
import App from './App';
import './main.css';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowseRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  </BrowseRouter>,
  rootElement
);
