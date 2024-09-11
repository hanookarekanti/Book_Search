import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../images/logo_img.jpg';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id='navbar'>
      <div className="container navbar-content flex -ml-4">
        <div className='brand-and-toggler flex flex-sb'>
          <Link to='/' className='navbar-brand flex items-center'>
            <img 
              src={logoImg} 
              alt='site logo' 
              className='w-12 h-12 rounded-full object-cover' 
            />
            <span className='ml-3 uppercase font-bold text-3xl tracking-wide text-blue-500'>
              Bbrowser
            </span>
          </Link>
          <button type='button' className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 
              size={35} 
              style={{
                color: `${toggleMenu ? '#fff' : '#010101'}`,
              }} 
            />
          </button>
        </div>

        <div className={toggleMenu ? 'navbar-collapse show-navbar-collapse' : 'navbar-collapse'}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='book' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
