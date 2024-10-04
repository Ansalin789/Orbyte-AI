import Search from './blog_widget/Search';
import Category from './blog_widget/Category';
import Post from './blog_widget/Post';
import Tag from './blog_widget/Tag';
import Newsletter from './blog_widget/Newsletter';

const Blog_Sidebar = () => {
  return (
    <aside className='jos flex flex-col gap-y-[30px]'>
      {/* Single Sidebar */}
      <Post />
      {/* Single Sidebar */}
      {/* Single Sidebar */}
      <Tag />
      {/* Single Sidebar */}
    </aside>
  );
};

export default Blog_Sidebar;
