function App() {
  return (
    <>
     <div className="w-full h-dvh flex justify-center items-center bg-[#121212]">
      <div className="flex items-center flex-col h-[70%] w-1/2 bg-blue-500 rounded-2xl py-8 px-4 shadow-2xl">
        <h1 className="font-semibold text-4xl mb-8">Form Example</h1>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="fname" className="mr-4">First Name</label>
            <input type="text" name="fname" id="fname" className="border " />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="border " />
          </div>


          <input type="submit" value="enviar" className="bg-red-700 p-2 rounded-2xl cursor-pointer mt-8" />

        </div>
      </div>
     </div>
    </>
  )
}

export default App
