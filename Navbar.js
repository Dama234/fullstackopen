import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

export default function Navbar() {
  const auth = useAuth();

  return (
    <div>
      <nav className='primary'>
        <div className='logo'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcb9ttN14o7idxRaaXSZ_TxtsxrigZ9XxI0XeryA&s'
            alt='Logo'
            className='logo-img'
          />
        </div>
        <div className='nav-items'>
          <NavLink to='/'>Home</NavLink>
         
          <NavLink to='/nri'>Nri</NavLink>
          <NavLink to='/agri'>Agri</NavLink>
          
          <NavLink to='/login'>Login</NavLink>

        </div>
        <div className='search-container'>
          <input className='search' type='search' placeholder='Search ' />
          <button className='search-button'>Search</button>
        </div>
      </nav>
    </div>
  );
}
