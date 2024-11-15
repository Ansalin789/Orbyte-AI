import { Link } from 'react-router-dom';
import Blog_Sidebar from '../../../../components/sidebar/blog_sidebar/Blog_Sidebar';
import data from './data.json';
import Blog_View from '../../../../components/widget/Blog_View';

const Blog_Section = () => {
  return (
    <section className='blog-section'>
      {/* Section Spacer */}
      <div className='pb-40 xl:pb-[220px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.45fr)]'>
            <div className='flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20'>
              {/* Blog Post List */}
              <ul className='grid grid-cols-2 gap-6'>
                {/* Blog Post Single Item */}
                {data.map((item, index) => (
                  <Blog_View key={index} {...item} />
                ))}
              </ul>
              {/* Pagination */}
            </div>
            {/* Blog Aside */}
            <Blog_Sidebar />
            {/* Blog Aside */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Blog_Section;
