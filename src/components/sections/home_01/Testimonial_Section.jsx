import Testimonial from '../../../components/widget/Testimonial';
import data from '../inner-pages/service/testimonial/data.json';

const Testimonial_Section = () => {
  return (
    <>
      {/*...::: Testimonial Section Start :::... */}
      <section className='testimonial-section'>
        {/* Section Spacer */}
        <div className="pb-20 pt-10 xl:pb-[200px] xl:pt-[130px] bg-cover -mt-44">
          {/* Section Container */}
          <div className='global-container'>
            <div className="row col-span-12">
              <div className="col-span-6">
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mt-12 lg:grid-cols-2 md:w-[90%] lg:w-[1100px] p-5 md:p-10 lg:p-20 mx-auto'>
                  <h4 className='font-body heroaa mt-16 md:mt-16 lg:mt-28 text-center md:text-left font-medium leading-[1.06] -tracking-[2px] text-black text-[28px] md:text-[36px] lg:text-[48px] xl:text-[50px]'>
                    What are people saying about Orbyte AI
                  </h4>
                  {/* Testimonial Item */}
                  {data.map((item, index) => (
                    <Testimonial key={index} {...item} />
                  ))}
                  {/* Testimonial Item */}
                </div>
              </div>
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Testimonial Section End :::... */}
    </>
  );
};

export default Testimonial_Section;
