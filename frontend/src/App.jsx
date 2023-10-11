import { useState } from 'react'
import image from "../src/assets/images/illustration-sign-up-desktop.svg"


function App() {
  const [submitted, setSubmitted] = useState("");

  return (
    <main className='bg-slate-500 h-screen w-screen'>
      {
        !submitted     ? 
      <div className='flex bg-slate-500 h-screen w-screen'>
        <form action="post">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li> Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </form>
        <img src={image} alt="" />
      </div>  : 
      
      <>
      </>}
    </main>
  )
}

export default App
