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
                <h2 className='mb-[50px] text-white font-body text-[40px] heroa'>welcome back</h2>
                <div className='block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10 bg-gradient-to-t from-[#4695a7] via-[#000000] to-[#4d2b77]'>
                  {/* Login Form */}
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-5'
                  >
                    {/* Form Group */}
                    <div className='grid grid-cols-1 gap-6'>
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
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
                          className='rounded-[50px] border border-gray-300 bg-white px-6 py-[10px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#622ca5]'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='login-password'
                          className='text-lg font-body leading-[1.6] text-white'
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
                          className='rounded-[50px] border border-gray-300 bg-white px-6 py-[10px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#622ca5]'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      <div className='flex flex-wrap justify-between gap-x-10 gap-y-4'>
                        {/* Form Single Input */}
                        <div className='flex gap-x-8 gap-y-[10px]'>
                          <input
                            type='checkbox'
                            className="relative appearance-none text-base after:absolute after:left-0 after:top-[6px] after:h-4 after:w-4 after:rounded-[3px] after:border after:border-[#7F8995] after:bg-white after:text-white after:transition-all after:delay-300x checked:after:bg-[#000] checked:after:bg-[url('/assets/img/th-1/icon-white-checkmark-filled.svg')]"
                            name='login-check'
                            id='login-check'
                            required=''
                          />
                          <label
                            htmlFor='login-check'
                            className='text-base font-body leading-[1.6] text-white'
                          >
                            Remember me
                          </label>
                        </div>
                        {/* Form Single Input */}
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='button mt-7 font-body block rounded-[50px] bg-[#212462] py-3 text-white after:bg-[#16184a] hover:text-white'
                    >
                      Sign in
                    </button>
                    {/* Form Group */}
                  </form>
                  <div className='mt-10 text-center'>
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
