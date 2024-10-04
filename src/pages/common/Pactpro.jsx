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
          <title>Pact Pro</title>
          <link rel="canonical" href="http://mysite.com/example" />
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
