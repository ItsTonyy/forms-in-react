import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const createUserFormSchema = z.object({
  name: z.string()
  .nonempty('First name field is required.'),

  email: z.string()
  .nonempty('E-mail field is required.')
  .email('Invalid e-mail format.'),

  password: z.string()
  .nonempty('Password field is required.')
  .min(4, 'The password must be at least 4 characters long.'),

  country: z.string()
  .optional(),
});

// não é possível pegar os tipos do schema só fazendo typeof, é preciso utilizar o z.infer.
type createUserFormData = z.infer<typeof createUserFormSchema>;

function App() {
  const [output, setOutput] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const logUser = (data: any) => setOutput(JSON.stringify(data, null, 2));

  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-blue-500'>
        <div className='flex items-center flex-col h-[70%] w-1/2 bg-white rounded-2xl py-8 shadow-2xl'>
          <h1 className='font-semibold text-4xl mb-8'>Form Example</h1>

          <form onSubmit={handleSubmit(logUser)} className='w-full flex flex-col items-center'>
            <div className='flex flex-col mb-4'>
              <label htmlFor='fname' className='text-xl'>
                First Name
              </label>
              <input
                type='text'
                {...register('name')}
                className={`text-lg outline-none border shadow w-[22rem] h-10 px-2 ${
                  errors.name && 'border-2 border-red-500'
                }`}
              />
              {errors.name && <span className='text-red-500 font-semibold break-words'>{errors.name.message}</span>}
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='email' className='text-xl'>
                E-mail
              </label>
              <input
                type='email'
                {...register('email')}
                className={`text-lg outline-none border shadow w-[22rem] h-10 px-2 ${
                  errors.email && 'border-2 border-red-500'
                }`}
              />
              {errors.email && <span className='text-red-500 font-semibold break-words'>{errors.email.message}</span>}
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='password' className=' w-72 flex justify-start text-xl'>
                Password
              </label>
              <input
                type='password'
                {...register('password')}
                className={`text-lg outline-none border shadow w-[22rem] h-10 px-2 ${
                  errors.password && 'border-2 border-red-500'
                }`}
              />
              {errors.password && (
                <span className='text-red-500 font-semibold break-words'>{errors.password.message}</span>
              )}
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='country' className='text-xl'>
                Country (optional)
              </label>
              <input
                type='country'
                {...register('country')}
                className='text-lg outline-none border shadow w-[22rem] h-10 px-2'
              />
            </div>

            <input
              type='submit'
              value='Submit'
              className='bg-black text-white w-36 shadow-2xl p-2 rounded-2xl cursor-pointer mt-8
          active:scale-95 transition-transform duration-100'
            />

            <pre className='flex flex-col mt-8'>{output}</pre>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
