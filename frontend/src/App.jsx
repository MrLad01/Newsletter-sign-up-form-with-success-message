import { useState } from 'react'
import image from "../src/assets/images/illustration-sign-up-desktop.svg"


function App() {
  const [submitted, setSubmitted] = useState("");

  return (
    <main className='sm:max-2xl:bg-slate-800 h-screen w-screen sm:max-2xl:flex sm:max-2xl:justify-center sm:max-2xl:items-center'>
      {
        !submitted     ? 
      <div className='sm:max-2xl:flex sm:max-2xl:w-1/2 sm:max-2xl:h-2/3 sm:max-2xl:p-5 bg-white sm:max-2xl:rounded-3xl'>
        <form action="post">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li> Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder='email@company.com' id="email" />
          <button>Subscribe to monthly newsletter</button>
        </form>
        <img src={image} alt="" />
      </div>  : 
      
      <>
      </>}
    </main>
  )
}

export default App
