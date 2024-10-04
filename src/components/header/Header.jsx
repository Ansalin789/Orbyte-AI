import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

const Header = ({ loginCSS, signupCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className={`site-header bg-transparent orionnav py-3`}
      id='sticky-menu1'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <div className='ml-4 lg:ml-28'>
            <Logo />
          </div>
          {/* Header Logo */}

          {/* Header Navigation */}
          <div className='hidden lg:block'>
            <Navbar
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
              color={navColor}
            />
          </div>
          {/* Header Navigation */}

          {/* Header User Event */}
          <div className='flex items-center'>
            <div className='hidden lg:flex items-center'>
              <Link to='/login' className={loginCSS}>
                Sign In
              </Link>
              <Link to='/signup' className={signupCSS}>
                Sign Up
              </Link>
            </div>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger ${
                  light ? 'is-white' : 'is-black'
                }`}
              >
                {/* You can add a menu icon here */}
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className='lg:hidden'>
          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            color={navColor}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
