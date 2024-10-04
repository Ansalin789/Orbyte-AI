import { Helmet } from 'react-helmet';
import useAccordion from '../../../hooks/useAccordion';

const Faq = () => {
  const [activeIndexTwo, handleAccordionTwo] = useAccordion();
  return (
    <section className='faq-section style-divider mt-6'>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbyte AI</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      {/* Section Spacer */}
      <div className='py-10 sm:py-16 md:py-20 xl:pb-[150px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-6 text-center sm:mb-10 md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-body text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium leading-tight tracking-tight text-center py-6 md:py-2'>
              Frequently Asked Questions
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Accordion */}
          <ul className='accordion flex flex-col gap-y-4 sm:gap-y-6'>
            {/* Accordion items */}
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 0 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(0)}
                className='font-body accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                What is Orbyte AI?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI is an advanced contract management platform engineered to enhance productivity, increase profitability, and significantly reduce risk through the application of cutting-edge artificial intelligenc
                </p>
              </div>
            </li>
            {/* Accordion items */}
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 1 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(1)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                How does Orbyte AI improve productivity?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI delivers up to an 80% boost in productivity by streamlining operations and optimizing workflow efficiency, enabling your team to focus on strategic initiatives and drive greater results.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 2 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(2)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                How does Orbyte AI enhance profitability?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI can elevate profitability by up to 60% by refining contract management processes, reducing value leakage, and strengthening your financial performance through precise oversight and control.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 3 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(3)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                In what ways does Orbyte AI reduce risk?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI achieves up to a 95% reduction in risk by safeguarding contract value and minimizing potential erosion, ensuring that your contracts are consistently compliant and aligned with your business goals.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 4 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(4)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                Who can benefit from Orbyte AI?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI is designed to benefit businesses across various industries, including legal, financial services, real estate, and healthcare, where effective contract management is critical to success.
                </p>
              </div>
            </li>
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 5 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(5)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                How easy is it to integrate Orbyte AI with our existing systems?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI is built for seamless integration with your current systems, offering broad compatibility and a smooth transition, ensuring minimal disruption while maximizing efficiency from day one.
                </p>
              </div>
            </li>
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 6 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(6)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                What support does Orbyte AI provide?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Orbyte AI offers comprehensive support, including personalized onboarding, in-depth training, and continuous customer service, empowering your team to fully leverage our platform’s powerful capabilities.
                </p>
              </div>
            </li>
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 7 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(7)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                Can Orbyte AI be customized to meet our specific needs?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Absolutely. Orbyte AI is highly adaptable, allowing for customization to meet the unique needs of your business and delivering tailored solutions that align with your specific contract management objectives.
                </p>
              </div>
            </li>
            <li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 8 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(8)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                How does Orbyte AI ensure data security?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Data security is a top priority at Orbyte AI. We employ state-of-the-art encryption, alongside rigorous compliance with data protection standards, to ensure that your sensitive information remains secure and confidential.
                </p>
              </div>
            </li><li
              className={`jos accordion-item rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#121212] px-6 sm:px-8 md:px-10 py-[10px] sm:py-[12px] ${
                activeIndexTwo === 9 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(9)}
                className='accordion-header mb-[8px] sm:mb-[10px] flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl'
              >
                <h4 className='font-body text-[18px] sm:text-[20px] text-slate-100'>
                How do we get started with Orbyte AI?
                </h4>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p className='font-body text-[14px] sm:text-[15px]'>
                Getting started is easy. Simply reach out to our team through our website, and we’ll guide you through a tailored implementation process designed to integrate Orbyte AI seamlessly into your organization.
                </p>
              </div>
            </li>
            {/* Accordion items */}
          </ul>
          {/* Accordion */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Faq;
