import CoreValue from '../../components/sections/inner-pages/about/CoreValue';
import Team from '../../components/sections/inner-pages/about/team/Team';
import Service from '../../components/sections/home_04/Service';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>About Orbyte AI - AI-Driven Business Solutions
          </title>
    <meta
      name="description"
      content="Learn about Orbyte AI, a leader in AI-powered software. Meet our team and discover how we help businesses grow with smart, easy-to-use technology. Find out what makes Orbyte AI special."
    />
    <meta
      name="keywords"
      content="AI innovation for business, OrbyteAI solutions, PactPro contract management, OfizzPro office administration, AI-driven business products, Contract lifecycle management, Efficient office administration, Advanced AI for business operations, Business automation solutions, AI-powered business tools, State-of-the-art AI products, Contract management AI software, Office management with AI, Business productivity with AI, OrbyteAI PactPro and OfizzPro
"
    />
    <link rel="canonical" href="https://orbyte.ai/about" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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
