// import { useState } from 'react';
import { useRef } from 'react';
// import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

const Contact_Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2n8hkxe', 'template_hb3xtcl', form.current, {
        publicKey: 'bZ-eUNQR-24RVrUub',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };

  // const [input, setInput] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   company: '',
  //   message: '',
  // });

  // const handleInput = (e) => {
  //   setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     input.name === '' ||
  //     input.email === '' ||
  //     input.phone === '' ||
  //     input.message === ''
  //   ) {
  //     swal('Oops', 'Please fill all required fields', 'error');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:5000/api/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(input),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       swal('Success', 'Your message has been sent!', 'success');
  //     } else {
  //       swal('Error', data.message, 'error');
  //     }
  //   } catch (error) {
  //     swal('Error', 'Failed to send email', 'error');
  //     console.error('Failed to send email:', error);
  //   }
  // };

  return (
    <div className='rounded-[20px] shadows block px-4 py-6 md:px-8 md:py-10 mt-7'>
      <form onSubmit={sendEmail} ref={form} className='flex flex-col gap-y-4'>
        {/* Form Group */}
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-2'>
            <label
              // htmlFor='contact-name'
              className='text-sm md:text-lg font-body leading-[1.6] text-white'
            >
              Enter your name <b className='text-white'></b>
            </label>
            <input
              type='text'
              name='name'
              // value={input.name}
              // onChange={handleInput}
              // id='contact-name'
              placeholder='Enter your name'
              className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
              required
            />
          </div>
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-2'>
            <label
              // htmlFor='contact-email'
              className='text-sm md:text-lg font-body leading-[1.6] text-white'
            >
              Email address <b className='text-white'></b>
            </label>
            <input
              type='email'
              name='email'
              // value={input.email}
              // onChange={handleInput}
              // id='contact-email'
              placeholder='Enter email address'
              className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
              required
            />
          </div>
        </div>
        {/* Form Group */}
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-2'>
            <label
              // htmlFor='contact-phone'
              className='text-sm md:text-lg font-body leading-[1.6] text-white'
            >
              Phone number <b className='text-white'></b>
            </label>
            <input
              type='text'
              name='phone'
              // value={input.phone}
              // onChange={handleInput}
              // id='contact-phone'
              placeholder='Enter Phone Number'
              className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
              required
            />
          </div>
        </div>
        {/* Form Group */}
        <div className='flex flex-col gap-y-2'>
          <label
            // htmlFor='contact-message'
            className='text-sm md:text-lg font-body leading-[1.6] text-white'
          >
            Message <b className='text-white'></b>
          </label>
          <textarea
            name='msg'
            // value={input.message}
            // onChange={handleInput}
            // id='contact-message'
            className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
            placeholder='Write your message here...'
            required
          />
        </div>
        <div>
          <button
            type='submit'
            className='font-body p-2 pr-3 pl-3 mt-4 rounded-[10px] md:rounded-[10px] bg-[#2B2252] text-white md:text-base text-sm hover:bg-[#3c2a7a] transition-colors'
          >
            Send
          </button>
        </div>
      </form>
    </div>


    // <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
    //   <label>Name</label>
    //   <input type="text" name="name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

export default Contact_Form;
