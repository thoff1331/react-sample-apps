import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

import Counter from './counter/counter';
import Todo from './todo/todo';
import Navbar from './navbar/navbar';
import UserFetch from './userFetch/userFetch';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/userfetch" element={<UserFetch />} />
    </Routes>
  </Router>
);
