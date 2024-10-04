import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email === '' || input.password === '') {
      swal('Opes', 'Please fill all fields', 'error');
      return;
    }
  };
  return (
    <>
      <main className='main-wrapper relative overflow-hidden bg-black'>
        {/*...::: Login Section Start :::... */}
        <section id='login-section'>
          {/* Section Spacer */}
          <div className='py-40 pt-36 xl:pb-[200px] xl:pt-[60px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='mx-auto max-w-[510px] text-center'>
                <h3 className='mb-[50px] text-white font-body text-[30px] heroa'>Welcome back</h3>
                <div className='rounded-[20px] shadows block px-4 py-6 md:px-8 md:py-10 mt-7'>
                  {/* Login Form */}
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-4'
                  >
                    {/* Form Group */}
                    <div className='grid grid-cols-1 gap-y-4 md:grid-cols-1 md:gap-x-6'>
                      {/* Form Single Input */}
                      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
                        <label
                          htmlFor='login-email'
                          className='text-lg font-body leading-[1.6] text-white'
                        >
                          Email address
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={input.email}
                          onChange={handleInput}
                          id='login-email'
                          placeholder='example@gmail.com'
                          className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6'>
                        <label
                          htmlFor='login-password'
                          className='text-sm md:text-lg font-body leading-[1.6] text-white'
                        >
                          Enter Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          value={input.password}
                          onChange={handleInput}
                          id='login-password'
                          placeholder='Enter Your Password'
                          className='rounded-[10px] border text-sm md:text-base border-gray-700 bg-[#2B2252] p-2 md:px-4 md:py-[6px] font-body text-white outline-none transition-all placeholder:text-slate-500 focus:border-white'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                    </div>
                    <button
                      type='submit'
                      className='font-body p-2 pr-3 pl-3 mt-4 rounded-[10px] md:rounded-[10px] bg-[#2B2252] text-white md:text-base text-sm hover:bg-[#3c2a7a] transition-colors'
                    >
                      Sign in
                    </button>
                    {/* Form Group */}
                  </form>
                  <div className='mt-10 text-center font-body'>
                    Don't have an account? &nbsp;
                    <Link
                      to='/signup'
                      className='text-base font-body hover:text-[#2c949b]'
                    >
                      Sign Up here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Login Section End :::... */}
      </main>
    </>
  );
};

export default Login;
