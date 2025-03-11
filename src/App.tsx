import { z } from 'zod';
import { useForm } from 'react-hook-form';

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const logUser = (data: any) => console.log(data)

  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-blue-500'>
        <div className='flex items-center flex-col h-[70%] w-1/2 bg-white rounded-2xl py-8 px-4 shadow-2xl'>
          <h1 className='font-semibold text-4xl mb-8'>Form Example</h1>

          <form onSubmit={handleSubmit(logUser)} className='flex flex-col'>
            <div className='flex flex-col'>
              <label htmlFor='fname' className='text-lg'>
                First Name
              </label>
              <input
                type='text'
                {...register("name", {required: true})}
                className='text-xl mb-4 outline-none border shadow'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='email' className='text-lg'>
                E-mail
              </label>
              <input
                type='email'
                {...register("email", {required: true})}
                className='text-xl mb-4 outline-none border shadow'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='fname' className='text-lg'>
                Password
              </label>
              <input
                type='password'
                {...register("password", {required: true})}
                className='text-xl mb-2 outline-none border shadow'
              />
            </div>

            <input
              type='submit'
              value='Submit'
              className='bg-black text-white shadow-2xl p-2 rounded-2xl cursor-pointer mt-8
          active:scale-95 transition-transform duration-100'
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
