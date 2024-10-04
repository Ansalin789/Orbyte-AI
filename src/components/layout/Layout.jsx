import { Outlet } from 'react-router-dom';
import Footer_01 from '../footer/Footer_01';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className='page-wrapper relative z-[1] bg-black text-white'>
      {/*...::: Header Start :::... */}
      <Header
        loginCSS='button rounded-[50px] font-body border-black text-white text-[14px] hover:text-white lg:inline-block font-normal'
        signupCSS='button rounded-[50px] font-body border-black bg-black text-white text-[13px] hover:text-white lg:inline-block font-normal'
      />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
};

export default Layout;
