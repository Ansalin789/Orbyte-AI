import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../pages/common/Contact';
import Pricing from './Pricing';
import Content_01a from '../../components/sections/inner-pages/service_details/Content_01a';
import Content_02a from '../../components/sections/inner-pages/service_details/Content_02a';
import ContentDisplay_2 from '../../components/sections/home_04/Contentdisplay_2';
import ContentDisplay_3 from '../../components/sections/home_04/Contentdisplay_3';
import ContentDisplayp2 from '../../components/sections/home_04/Contentdisplayp2';
import { Helmet } from 'react-helmet';

const Ofizzpro = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Human Resource Management Software, Enhance HR and Operational Efficiency with OfizzPro
    </title>
    <meta
      name="description"
      content="Orbyte AI's HR software makes managing employees easy. Track time, manage leave, and boost performance—all in one simple tool. Perfect for any business. Save time and improve efficiency with our user-friendly HR solution
"
    />
    <meta
      name="keywords"
      content="HR Efficiency, Operational Efficiency, OfizzPro HR Solutions, HR Management Tools, Employee Productivity Tools, streamlined HR operations, HR Automation, Business Process Optimization, administrative tasks automation, HR process management, HR policies management, workplace organization, AI for HR office management tools"
    />
    <link rel="canonical" href="https://www.orbyte.ai/ofizzpro" />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    </Helmet>
      <main className='main-wrapper relative overflow-hidden bg-[#000000]'>
        <Content_01a />
        <Content_02a />

        <ContentDisplay_2 />
        {/* <Pricing /> */}
        <ContentDisplay_3 />

        <ContentDisplayp2 />
      </main>
    </>
  )
}

export default Ofizzpro
