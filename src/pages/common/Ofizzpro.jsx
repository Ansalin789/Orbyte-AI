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
      <title>Ofizz Pro</title>
      <link rel="canonical" href="http://mysite.com/example" />
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
