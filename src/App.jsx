import { Route, Routes } from 'react-router-dom';
import About from './pages/common/About';
import Home_04 from './pages/home/Home_04';
import Blog_details from './pages/common/Blog_details';
import Blog from './pages/common/Blog';
import Contact from './pages/common/Contact';
import Faq_02 from './pages/common/faq/faq_02/Faq_02';
import Login from './pages/common/Login';
import Portfolio_details from './pages/common/Portfolio_details';
import Portfolio from './pages/common/Portfolio';
import Pricing from './pages/common/Pricing';
import Services from './pages/common/Services';
import Signup from './pages/common/Signup';
import Team_details from './pages/common/Team_details';
import Team from './pages/common/team/Team';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Faq_01 from './pages/common/faq/faq_01/Faq_01';
import Pactpro from './pages/common/Pactpro';
import Ofizzpro from './pages/common/Ofizzpro';
import Faq from './components/sections/home_04/Faq';
import why from './components/sections/home_04/Content_04';
import Content_04 from './components/sections/home_04/Content_04';
function App() {
  // Init JOS Animation
  useJOSAnimation();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home_04 />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-details' element={<Blog_details />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio-details' element={<Portfolio_details />} />
          <Route path='faq' element={<Faq />} />
          <Route path='faq-1' element={<Faq_01 />} />
          <Route path='faq-2' element={<Faq_02 />} />
          <Route path='team' element={<Team />} />
          <Route path='team-details' element={<Team_details />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='services' element={<Services />} />
          <Route path='pactpro' element={<Pactpro />} />
          <Route path='ofizzpro' element={<Ofizzpro />} />
          <Route path='why' element={<Content_04 />} />
        </Route>
        <Route path='home-4' element={<Home_04 />} />
      </Routes>
    </>
  );
}

export default App;
