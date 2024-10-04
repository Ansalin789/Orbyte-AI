import Content_01 from '../../components/sections/home_04/Content_01';
import Hero from '../../components/sections/home_04/Hero';
import Faq from '../../components/sections/home_04/Faq';
import Pacs from '../../components/sections/home_04/Pacs';
import Contact from '../../pages/common/Contact';
import Container from '../../components/sections/home_04/Container';
import Footer_01 from '../../components/footer/Footer_01';
import { Helmet } from 'react-helmet';

const Home_04 = () => {
  return (
    <>
      <div className='page-wrapper relative z-[1] bg-gradient-to-t from-[#030105] via-[#000] to-[#030105] text-white'>
        {/* <Header
          loginCSS='hidden border-b-2 border-transparent font-bold text-white transition-all duration-300 hover:text-colorViolet lg:inline-block'
          signupCSS='button hidden h-full rounded border-none bg-gradient-to-t from-[#000000] to-[#221236] py-3 text-white after:border-none after:bg-white hover:text-black lg:inline-block'
          navColor='is-text-white'
          light
        /> */}

        <Helmet>
            <meta charSet="utf-8" />
            <title>Orbyte AI</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <main className='main-wrapper relative overflow-hidden'>
          <Hero />
          <Content_01 />
          {/* <Promo /> */}
          
          <Pacs />
          <Container />
          {/* <Testimonial_Section /> */}
          <Faq />
          {/* <Chat /> */}
          <Contact />
        </main>
        <Footer_01 />
        
      </div>
    </>
  );
};

export default Home_04;
