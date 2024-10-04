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
                <h2 className='mb-[50px] text-white font-body text-[40px] heroa'>Create Account</h2>
                <div className='block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10 bg-gradient-to-t from-[#4695a7] via-[#000000] to-[#4d2b77]'>
                  {/* Sign Up Form */}
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-5 '
                  >
                    {/* Form Group */}
                    <div className='grid grid-cols-1 gap-6'>
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='signup-name'
                          className='text-lg font-body leading-[1.6] text-white'
                         >
                          Enter your name
                        </label>
                        <input
                          type='text'
                          name='name'
                          value={input.name}
                          onChange={handleInput}
                          id='signup-name'
                          placeholder='Enter your name'
                          className='rounded-[50px] border border-gray-300 bg-white px-6 py-[10px] font-body text-black outline-none transition-all placeholder:text-slate-500'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='signup-email'
                          className='text-lg font-body leading-[1.6] text-white'
                        >
                          Email address
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={input.email}
                          onChange={handleInput}
                          id='signup-email'
                          placeholder='example@gmail.com'
                          className='rounded-[50px] border border-gray-300 bg-white px-6 py-[10px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='signup-password'
                          className='text-lg font-body leading-[1.6] text-white'
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
                          className='rounded-[50px] border border-gray-300 bg-white px-6 py-[10px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex gap-x-8 gap-y-[10px]'>
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
                            className='font-bold hover:text-colorViolet'
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
                      </div>
                      {/* Form Single Input */}
                    </div>
                    <button
                      type='submit'
                      className='button mt-7 block font-body rounded-[50px] border-1 bg-[#2e566c] py-2 text-white after:bg-[#255482] hover:text-white'
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
