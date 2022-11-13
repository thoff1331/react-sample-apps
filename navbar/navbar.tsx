import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="nav-items">
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </div>
  );
}
