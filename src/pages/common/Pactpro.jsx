import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../pages/common/Contact';
import ContentDisplay from '../../components/sections/home_04/Contentdisplay';
import ContentDisplay_1 from '../../components/sections/home_04/Contentdisplay_1';
import ContentDisplayp1 from '../../components/sections/home_04/Contentdisplayp1';
import Content_01 from '../../components/sections/inner-pages/service_details/Content_01';
import Content_02 from '../../components/sections/inner-pages/service_details/Content_02';
import Pricing from './Pricing';
import { Helmet } from 'react-helmet';

const Pactpro = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>AI-Driven Contract Lifecycle Management Solutions | Automate, Optimize & Manage Contracts Efficiently
    </title>
    <meta
      name="description"
      content="Transform your contract management process with AI-driven solutions. Our intelligent contract lifecycle management streamlines workflows, reduces risk, and enhances compliance. Automate contract creation, tracking, and analysis for optimal efficiency and smarter business outcomes."
    />
    <meta
      name="keywords"
      content="Contract Lifecycle Management, AI-Driven Contract Management, Contract Automation, AI in Contract Management, Intelligent Contract Solutions, Contract Analytics, Contract Lifecycle Automation, Contract Workflow Optimization, Contract Risk Management, AI-Powered Contract Lifecycle, AI-driven contract management, Contract management with AI, AI solutions for contract management, Automated contract management, Intelligent contract management software, AI-powered contract management tools, Benefits of AI in contract management, AI contract management software solutions"
    />
    <link rel="canonical" href="https://www.orbyte.ai/pactpro" />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
      </Helmet>
      <main className='main-wrapper relative overflow-hidden bg-[#000]'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Content_01 />
        <Content_02 />

        <ContentDisplay />
        {/* <Pricing /> */}
        <ContentDisplay_1 />

        <ContentDisplayp1 />
      </main>
    </>
  );
};

export default Pactpro;
