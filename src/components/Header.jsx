import React from 'react';

export default function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark box-shadow">
      <div className="container justify-content-center">
        <a class="navbar-brand">User Welcome - Context App</a>
      </div>
      <div className="container justify-content-center">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
