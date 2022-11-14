import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="nav-items">
      <li>
        <Link className="nav-links" to="/counter">
          Counter
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/todo">
          Todo
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/userfetch">
          User
        </Link>
      </li>
    </div>
  );
}
