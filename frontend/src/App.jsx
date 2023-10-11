import { useState } from 'react'
import image from "../src/assets/images/illustration-sign-up-desktop.svg"
import { AiFillCheckCircle } from "react-icons/ai"

function App() {
  const [submitted, setSubmitted] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
 
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(email);
  }
  
  console.log(email);

  
  return (
    <main className='sm:max-2xl:bg-slate-800 h-screen w-screen sm:max-2xl:flex sm:max-2xl:justify-center sm:max-2xl:items-center'>
    
      {
        !submitted    
        
         ? 
            <div className='sm:max-2xl:flex sm:max-lg:w-2/3 md:max-2xl:w-1/2 sm:max-2xl:h-2/3 lg:p-7 bg-white sm:max-2xl:rounded-3xl sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7'>

              <div className='sm:scale-75 md:scale-75 lg:scale-100 xl:scale-105 2xl:scale-110 sm:max-2xl:flex justify-start'>

                  <form action="post" onSubmit={handleSubmit} className='sm:p-5 md:p-9 lg:p-10 xl:p-11 2xl:p-11  ' >

                    <h1 className='text-3xl leading-10 font-extrabold w-full'>Stay updated!</h1>

                    <p className='text-xs my-2'>Join 60,000+ product managers receiving monthly updates on:</p>

                    <ul className='text-xs my-4'>

                      <li className='list-item-with-icon flex gap-3 items-center justify-start text-xs mb-2'><AiFillCheckCircle style={{color: 'orange', width: '20px', height: '20px'}} />Product discovery and building what matters</li>

                      <li className='flex gap-3 items-center justify-start text-xs mb-2'><AiFillCheckCircle style={{color: 'orange', width: '20px', height: '20px'}} /> Measuring to ensure updates are a success</li>

                      <li className='flex gap-3 items-center justify-start text-xs mb-2'><AiFillCheckCircle style={{color: 'orange', width: '20px', height: '20px'}} />And much more!</li>

                    </ul>

                    <div className='email grid pt-2'>  

                    <div className="flex justify-between">

                      <label htmlFor="email" className='text-xs font-bold'>Email address</label>

                      {
                        error ?
                         <h3 className='text-xs text-rose-400'>Valid email required</h3> 
                         : 
                         <></>
                      }

                    </div>

                      <input 
                        type="email" 
                        placeholder='email@company.com' 
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        onInvalid={(e) => {
                          e.preventDefault();
                          setError(true);
                        }} 
                        className={`text-xs p-3 my-1 
                        ${error? "border-rose-400" :"border-2"} rounded-lg
                        ${error ? "border-2" :"outline-0"} focus:outline-2 
                        ${error ? "outline-rose-400" :"outline-slate-500"}
                        ${error ? "bg-rose-100" : ""}`}
                      />

                    </div>

                    <button 
                    className='text-xs text-white bg-slate-800 p-3 rounded-lg w-full mt-2 hover:bg-gradient-to-r  hover:from-tomato hover:to-orange-400 focus:bg-gradient-to-r  focus:from-tomato focus:to-orange-400 hover:shadow-2xl shadow-current'>
                      Subscribe to monthly newsletter
                    </button>

                  </form>

                  <img 
                    src={image} 
                    alt="" 
                  />

                </div>  

              </div>
          : 
            
              <>
              </>
      }
    </main>
  )
}

export default App
