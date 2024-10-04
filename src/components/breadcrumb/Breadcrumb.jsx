import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ title, link = title }) => {
  return (
    <section id='section-breadcrumb'>
      {/* Section Spacer */}
      <div className="breadcrumb-wrapper bg-[url('/assets/img/th-4/11.jpg')] bg-cover">
        {/* Section Container */}
        <div className='global-container'>
          <div className='breadcrumb-block'>
            <h1 className='breadcrumb-title text-white'>{title}</h1>
            <ul className='breadcrumb-nav text-white'>
              <li className='text-white'>
                <Link to='/'>Home</Link>
              </li>
              <li>{link}</li>
            </ul>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Breadcrumb;
