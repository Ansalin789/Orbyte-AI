import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact_Form from '../sections/inner-pages/contact/contact_section/section_part/Contact_From';

const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState('');
  const [mobileSubMenuSub, setMobileSubMenuSub] = useState('');
  const [menuTitle, setMenuTitle] = useState('');
  const [showModal, setShowModal] = useState(false); // Add this line

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu('');
    setMobileSubMenuSub('');
  };

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    setMobileSubMenu(id);
    setMobileSubMenuSub(''); // Reset the subsubmenu when switching menus

    const content = e.target.tagName === 'A' ? e.target.firstChild.textContent : e.target.parentElement.textContent;
    setMenuTitle(content);
  };

  const handleSubMenuSub = (e, id) => {
    e.preventDefault();
    setMobileSubMenuSub(id);

    const content = e.target.tagName === 'A' ? e.target.firstChild.textContent : e.target.parentElement.textContent;
    setMenuTitle(content);
  };

  const handleGoBack = () => {
    if (mobileSubMenuSub) {
      setMobileSubMenuSub('');
      return;
    }
    if (mobileSubMenu) {
      setMobileSubMenu('');
      return;
    }
  };

  return (
    <div className='menu-block-wrapper'>
      <div
        onClick={handleMenu}
        className={`menu-overlay ${mobileMenu && 'active'}`}
      />
      <nav
        className={`menu-block ${mobileMenu && 'active'} sticky-navbar`}
        id='append-menu-header'
      >
        <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
          <div onClick={handleGoBack} className='go-back'>
            <img
              className='dropdown-icon'
              src='assets/img/icon-black-long-arrow-right.svg'
              alt='cheveron-right'
              width={16}
              height={16}
            />
          </div>
          <div className='current-menu-title'>{menuTitle}</div>
          <div onClick={handleMenu} className='mobile-menu-close'>
            ×
          </div>
        </div>
        <ul className={`site-menu-main font-body borderr border-zinc-600 bg-[#000] ${color}`}>
          {/* Global navbar */}
          <li onClick={(e) => handleSubMenu(e, 1)} className='nav-item'>
            <Link to='/' className='nav-link-item drop-trigger'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link-item'>About Us</Link>
          </li>
          <li onClick={(e) => handleSubMenu(e, 2)} className='nav-item nav-item-has-children'>
            <Link to='/why-choose-us' className='nav-link-item drop-trigger'>Why Choose Orbyte AI?</Link>
          </li>
          <li onClick={(e) => handleSubMenu(e, 3)} className='nav-item nav-item-has-children'>
            <Link to='#' className='nav-link-item drop-trigger'>
              Products
              <img
                className='dropdown-icon'
                src='assets/img/icon-black-cheveron-right.svg'
                alt='cheveron-right'
                width={16}
                height={16}
              />
            </Link>
            <ul className={`sub-menu ${mobileSubMenu === 3 && 'active'}`} id='submenu-3'>
              <li onClick={(e) => handleSubMenuSub(e, 1)} className='sub-menu--item nav-item-has-children'>
                <Link to='/pactpro' data-menu-get='h3' className='drop-trigger hover:text-blue-400'>
                  Pact Pro
                </Link>
              </li>
              <li onClick={(e) => handleSubMenuSub(e, 2)} className='sub-menu--item nav-item-has-children'>
                <Link to='/ofizzpro' data-menu-get='h3' className='drop-trigger'>
                  Ofizz Pro
                </Link>
              </li>
              <li onClick={(e) => handleSubMenuSub(e, 3)} className='sub-menu--item nav-item-has-children'>
                <Link to='#' data-menu-get='h3' className='drop-trigger'>
                  Insight Pro
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={(e) => handleSubMenu(e, 4)} className='nav-item nav-item-has-children'>
            <Link to='#' className='nav-link-item drop-trigger'>
              Resources
              <img
                className='dropdown-icon'
                src='assets/img/icon-black-cheveron-right.svg'
                alt='cheveron-right'
                width={16}
                height={16}
              />
            </Link>
            <ul className={`sub-menu ${mobileSubMenu === 4 && 'active'}`} id='submenu-4'>
              <li onClick={(e) => handleSubMenuSub(e, 1)} className='sub-menu--item nav-item-has-children'>
                <Link to='/blog' data-menu-get='h3' className='drop-trigger'>
                  Blog
                </Link>
              </li>
              <li onClick={(e) => handleSubMenuSub(e, 2)} className='sub-menu--item nav-item-has-children'>
                <Link to='/faq' data-menu-get='h3' className='drop-trigger'>
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={toggleModal} className='nav-item nav-item-has-children p-1'>
            <button to='#' className='nav-link-item bg-[#30225d] hover:bg-[#d9d5da] hover:text-[#000000] pr-3 pl-3 rounded-full font-body'>
              Request a Demo
            </button>
          </li>
        </ul>
      </nav>

      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
          <div className='relative p-8 rounded-lg'>
            <button
              className='absolute top-2 right-2 text-gray-500'
              onClick={toggleModal}
            >
              &times;
            </button>
            <Contact_Form/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
