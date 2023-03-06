import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="nav-top">
      <Link to="/">Главная страница</Link>
      <Link to="/about">О нас и вас</Link>
    </nav>
  );
}
