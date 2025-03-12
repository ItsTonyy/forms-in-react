import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const [output, setOutput] = useState('')

  const { register, formState: { errors }, handleSubmit } = useForm()

  const logUser = (data: any) => setOutput(JSON.stringify(data, null, 2))

  createUserFormSchema = z.object({
    fname: z.string(),
    email: z.string().email('invalid e-mail format.').nonempty('e-mail field is required.'),
    password: z.union([z.string(), z.number()])
  })

  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-blue-500'>
        <div className='flex items-center flex-col h-[70%] w-1/2 bg-white rounded-2xl py-8 px-4 shadow-2xl'>
          <h1 className='font-semibold text-4xl mb-8'>Form Example</h1>

          <form onSubmit={handleSubmit(logUser)} className='flex flex-col justify-center items-center'>
            <div className='flex flex-col'>
              <label htmlFor='fname' className='text-xl'>
                First Name
              </label>
              <input
                type='text'
                {...register("name")}
                className='text-lg mb-4 outline-none border shadow w-72 h-10 px-2'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='email' className='text-xl'>
                E-mail
              </label>
              <input
                type='email'
                {...register("email")}
                className='text-lg mb-4 outline-none border shadow w-72 h-10 px-2'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='fname' className='text-xl'>
                Password
              </label>
              <input
                type='password'
                {...register("password")}
                className='text-lg mb-2 outline-none border shadow w-72 h-10 px-2'
              />
            </div>

            <input
              type='submit'
              value='Submit'
              className='bg-black text-white w-36 shadow-2xl p-2 rounded-2xl cursor-pointer mt-8
          active:scale-95 transition-transform duration-100'
            />

            <pre className='flex flex-col mt-8'>
              {output}
            </pre>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
