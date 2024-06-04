import React from 'react'

function Footer(){
 return (
   <div className='py-10'> 
      <div className='h-[1px] w-full bg-tertiary opacity-40'>

      </div>
      <div className='flex items-center justify-center flex-col mt-10 opacity-70'>
        <h1 className='text-white'>Desgined and Developed By</h1>
        <h1 className='text-white'>Kandarp Rushikesh Patel</h1>
        <div className='flex flex-row gap-5'>
          <a href='https://www.linkedin.com/in/kandarp-rushikesh-patel/' target='_blank' rel="noreferrer"><i class="ri-linkedin-box-fill text-white text-2xl"></i></a>
          <a href='https://github.com/KandarpPatel-GitHub' target='_blank' rel="noreferrer"><i class="ri-github-fill text-white text-2xl"></i></a>
          <a href='mailto:patelkandarp2002@gmail.com' target='_blank' rel="noreferrer"><i class="ri-mail-fill text-white text-2xl"></i></a>
        </div>
      </div>
   </div>
 )
}

export default Footer