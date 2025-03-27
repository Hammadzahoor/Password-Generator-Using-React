import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback( () =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str = str + "!@#$%^&*()-/_+{}[]`~"
    }

    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random()*str.length + 1) 
      pass += str.charAt(char)
    }

    setPassword(pass) 

  }, [length, numberAllowed, charAllowed ,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()   //? is used to check if the value is not a null value
    // passwordRef.current?.setSelectionRange(0,50)  use to select range 
    window.navigator.clipboard.writeText(password)
  }, [password])

   useEffect(() => {
    passwordGenerator()
   },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
    <div className='w-full max-w-md rounded-lg py-4 px-3 text-orange-500 bg-gray-700'>
      <h1 className=' text-3xl text-white text-center my-3'>Password Generator</h1>
      <div className=' flex rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />
         <button
         onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-500 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           min={8}
           max={50}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked ={numberAllowed}
          id='numberinput'
          onChange={() =>{
            setnumberAllowed((prev) => !prev)
          }} />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked ={charAllowed}
          id='characterinput'
          onChange={() =>{
            setcharAllowed((prev) => !prev)
          }} />
          <label>Characters</label>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
