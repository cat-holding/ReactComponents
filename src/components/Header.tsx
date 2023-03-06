import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="nav-top">
      <Link to="/">Главная страница</Link>
      <Link to="/about">О нас</Link>
      <Link to="/404">Ошибка</Link>
    </nav>
  );
}
