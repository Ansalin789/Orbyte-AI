import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Signup = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    check: false,
  });

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleCheckBox = (value) => {
    setInput((prev) => ({ ...prev, check: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name === '' || input.email === '' || input.password === '') {
      swal('Opes', 'Please fill all fields', 'error');
      return;
    }
    if (!input.check) {
      swal(
        'Opes',
        'Please accept theTerms & Conditions  and  Privacy Policy',
        'error'
      );
      return;
    }
  };

  return (
    <>
      <main className='main-wrapper relative overflow-hidden bg-black'>
        {/*...::: Signup Section Start :::... */}
        <section id='signup-section'>
          {/* Section Spacer */}
          <div className='py-40 pt-36 xl:pb-[200px] xl:pt-[60px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='mx-auto max-w-[510px] text-center'>
                <h3 className='mb-[50px] text-white font-body text-[30px] heroa'>Create Account</h3>
                <div className='rounded-[20px] shadows block px-4 py-6 md:px-8 md:py-10 mt-7'>
                  {/* Sign Up Form */}
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-4'
                  >
                    {/* Form Group */}
                    <div className='grid grid-cols-1 gap-y-4 md:grid-cols-1 md:gap-x-6'>
                      {/* Form Single Input */}
                      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
                        <label
                          htmlFor='signup-name'
                          className='text-sm md:text-lg font-body leading-[1.6] text-white'
                         >
                          Enter your name <b className='text-white'></b>
                        </label>
                        <input
                          type='text'
                          name='name'
                          value={input.name}
                          onChange={handleInput}
                          id='signup-name'
                          placeholder='Enter your name'
                          className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
                        <label
                          htmlFor='signup-email'
                          className='text-sm md:text-lg font-body leading-[1.6] text-white'
                        >
                          Email addresss <b className='text-white'></b>
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={input.email}
                          onChange={handleInput}
                          id='signup-email'
                          placeholder='example@gmail.com'
                          className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
                        <label
                          htmlFor='signup-password'
                          className='text-sm md:text-lg font-body leading-[1.6] text-white'
                        >
                          Enter Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          value={input.password}
                          onChange={handleInput}
                          id='signup-password'
                          placeholder='............'
                          className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      {/* <div className='flex gap-x-8 gap-y-[10px]'>
                        <input
                          type='checkbox'
                          className="relative appearance-none after:absolute after:left-0 after:top-[6px] after:h-4 after:w-4 after:rounded-[3px] after:border after:border-[#7F8995] after:bg-white after:text-white after:transition-all after:delay-300 checked:after:border-colorViolet checked:after:bg-colorViolet checked:after:bg-[url('/assets/img/th-1/icon-white-checkmark-filled.svg')]"
                          name='check'
                          checked={input.check}
                          onChange={() => handleCheckBox(!input.check)}
                          id='signup-check'
                          required=''
                        />
                        <label
                          htmlFor='signup-check'
                          className='text-base font-body leading-[1.6] text-white'
                        >
                          I have read and accept the  
                          <Link
                            href='#'
                            className='font-body hover:text-colorViolet'
                          >
                             Terms &amp; Conditions
                          </Link>
                          &nbsp; and &nbsp;
                          <Link
                            href='#'
                            className='font-bold hover:text-colorViolet'
                          >
                            Privacy Policy
                          </Link>
                        </label>
                      </div> */}
                      {/* Form Single Input */}
                    </div>
                    <button
                      type='submit'
                      className='font-body p-2 pr-3 pl-3 mt-4 rounded-[10px] md:rounded-[10px] bg-[#2B2252] text-white md:text-base text-sm hover:bg-[#3c2a7a] transition-colors'
                    >
                      Create account
                    </button>
                    {/* Form Group */}
                  </form>
                  <div className='mt-10 text-center'>
                    Already have an account? &nbsp;
                    <Link
                      to='/login'
                      className='text-base font-body hover:text-[#2c949b]'
                    >
                      Log in here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Signup Section End :::... */}
      </main>
    </>
  );
};

export default Signup;
