import React from 'react'

function Intro(){
 return (
   <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'> 
      <h1 className='text-white'>
        Hi, I am
      </h1>
      <h1 className='text-secondary text-7xl sm:text-3xl font-semibold'>Kandarp Rushikesh Patel</h1>
      <h1 className='text-white text-5xl sm:text-3xl font-semibold'> I Create Custom Web Development Tailored To Your Needs</h1>
      <p className='text-white'> 
      As a recent Computer Programming and Analysis Graduate and Full Stack Developer, I specialize in JavaScript, ASP.Net Core, React, and Node.js. I excel in creating dynamic, responsive web applications and am eager to join a forward-thinking team to apply my skills and make a meaningful impact in the tech industry.
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded' >Get Started</button>
   </div>
 )
}

export default Intro 