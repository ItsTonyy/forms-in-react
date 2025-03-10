function App() {
  return (
    <>
     <div className="w-full h-dvh flex justify-center items-center bg-[#121212]">
      <div className="flex items-center flex-col h-[70%] w-1/2 bg-blue-500 rounded-2xl py-8 px-4 shadow-2xl">
        <h1 className="font-semibold text-4xl mb-8">Form Example</h1>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="fname" className="text-lg">First Name</label>
            <input type="text" name="fname" id="fname" className="text-xl mb-4 active:border-x-0 active:border-t-0 outline-none border active:border-black border-l-blue-500 border-r-blue-500 border-t-blue-500" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">Email</label>
            <input type="email" name="email" id="email" className="text-xl mb-4 active:border-x-0 active:border-t-0 outline-none border active:border-black border-l-blue-500 border-r-blue-500 border-t-blue-500" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fname" className="text-lg">Password</label>
            <input type="password" name="password" id="password" className="text-xl active:border-x-0 active:border-t-0 outline-none border active:border-black border-l-blue-500 border-r-blue-500 border-t-blue-500"/>
          </div>



          <input type="submit" value="Submit" className="bg-black text-white shadow-2xl p-2 rounded-2xl cursor-pointer mt-8
          active:scale-95 transition-transform duration-100" />

        </div>
      </div>
     </div>
    </>
  )
}

export default App
