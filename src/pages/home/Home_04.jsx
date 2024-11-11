import Content_01 from '../../components/sections/home_04/Content_01';
import Hero from '../../components/sections/home_04/Hero';
import Faq from '../../components/sections/home_04/Faq';
import Pacs from '../../components/sections/home_04/Pacs';
import Contact from '../../pages/common/Contact';
import Container from '../../components/sections/home_04/Container';
import { Helmet } from 'react-helmet';

const Home_04 = () => {
  return (
      <div className='page-wrapper relative z-[1] bg-gradient-to-t from-[#030105] via-[#000] to-[#030105] text-white'>
        {/* <Header
          loginCSS='hidden border-b-2 border-transparent font-bold text-white transition-all duration-300 hover:text-colorViolet lg:inline-block'
          signupCSS='button hidden h-full rounded border-none bg-gradient-to-t from-[#000000] to-[#221236] py-3 text-white after:border-none after:bg-white hover:text-black lg:inline-block'
          navColor='is-text-white'
          light
        /> */}

        <Helmet>
            <meta charSet="utf-8" />
            <title>AI-powered Contract Lifecycle Management System - Orbyte AI
            </title>
            <meta name="description" content="Orbyte AI's contract management system helps you manage agreements, quickly and securely. Our system is perfect for your legal team, it's simple and effective. Experience the power of AI to streamline your business workflow. Start transforming your contract processes now."/>
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
        {/* <Footer_01 /> */}
        
      </div>
  );
};

export default Home_04;
