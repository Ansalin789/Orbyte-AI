import Contact_From from './section_part/Contact_From';
import Contact_Info from './section_part/Contact_Info';

const Contact_Section = () => {
  return (
    <section className='contact-section p-5 md:p-10 lg:p-20'>
      {/* Section Spacer */}
      <div className='rounded-[30px] md:rounded-[40px] lg:rounded-[60px] pb-10 md:pb-20 xl:pb-[150px] bg-gradient-to-t from-[#000] via-[#301979] to-[#cfc1f1]'>
        <div className='global-container px-4 md:px-8 lg:px-16'>
          <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr] gap-x-8 md:gap-x-16'>
            <Contact_Info />
            <Contact_From />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Section;
