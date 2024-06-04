import React from 'react'

function Navigation() {
    return (
        <div>
            <div className='flex flex-col items-center'>
                
               {/*  <div className='w-[1px] h-full bg-[#1a8579]' >

                </div> */}
            </div>
            <div className='flex flex-row gap-3'>
                    <a href='#intro' className=' text-xl text-white'>Introduction</a>
                    <a href='#about' className=' text-white'>About</a>
                    <a href='#education' className=' text-white'>Education</a>
                    <a href='#projects' className=' text-white'>Projects</a>
                    <a href='#contact' className=' text-white'>Contact</a>
                </div>
        </div>
    )
}

export default Navigation