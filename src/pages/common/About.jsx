import CoreValue from '../../components/sections/inner-pages/about/CoreValue';
import Team from '../../components/sections/inner-pages/about/team/Team';
import Service from '../../components/sections/home_04/Service';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className='main-wrapper relative overflow-hidden bg-[#000]'>
        <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
          <CoreValue />
        </div>

        <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
          <Service />
        </div>
        
        <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
          <Team />
        </div>
      </main>
    </>
  );
};

export default About;
