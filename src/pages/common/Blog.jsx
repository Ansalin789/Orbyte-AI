import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Blog_Section from '../../components/sections/inner-pages/blog/Blog_Section';

const Blog = () => {
  return (
    <>
      <main className='p-14'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - orbyte AI
        </title>
        <meta
          name="description"
          content="Stay updated with the latest in AI innovation, business automation, and productivity solutions. Explore insights, trends, and tips from OrbyteAI to revolutionize your business operations with cutting-edge AI products"
        />
        <meta
          name="keywords"
          content="Orbyte AI Blog"
        />
        <link rel="canonical" href="https://orbyte.ai/blog" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>
        <div className='mx-2 mb-10 sm:mx-4 p-20 rounded-b-[50px] sm:rounded-b-[50px] bg-gradient-to-t from-[#cfc1f1] via-[#301979] to-[#000000] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[60px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='mb-6 text-center'>
              <div className='mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]'>
                <h2 className='jos text-white text-[30px] sm:text-[40px] md:text-[50px] font-body'>
                  Our Blogs
                </h2>
              </div>
            </div>
          </div>
        </div> 
        {/*...::: Blog Section Start :::... */}
        <Blog_Section />
        {/*...::: Blog Section End :::... */}
      </main>
    </>
  );
};

export default Blog;
