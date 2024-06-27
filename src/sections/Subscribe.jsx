import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
   <section className='bg-[url(/src/assets/newsletter.svg)] bg-cover bg-center bg-no-repeat w-full px-24 py-12'>
        <div className='flex flex-col items-center gap-8'>
       
       <div className='flex flex-col items-center gap-6'> 
        <img
        src="/src/assets/Vector.svg"
        alt="mail"
        />
        <h1 className='max-w-lg text-white text-2xl sm:text-3xl font-sf-pro text-center font-semibold'>Sign up for a regular roundup of ideas and inspiration. It might just spark something for you.</h1>
        </div>
        <div className='flex gap-4 items-center '>
            <input className='bg-black  text-white text-sm px-10 w-[270px] py-2 border-white border-2 text-left rounded-full placeholder:text-white' type='text' placeholder='Enter your email address'/>
            <Button label="Sign Up" backgroundColor='white'  textColor='black' />
        </div>
        <p className='text-white text-xs'>By signing up you agree to our Terms & Conditions and Privacy Policy.</p>

        </div>
    </section>
  )
}

export default Subscribe