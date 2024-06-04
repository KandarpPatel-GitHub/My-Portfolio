import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import image from '../../images/contact-me.png'

function Contact(){
    const contactInfo = {
        name:"Kandarp Patel",
        email:"patelkandarp2002@gmail.com",
        phone:"+1(647)9149366",
        location:"Kitchener, Ontario"
    }
 return (
   <div>
      <SectionTitle title="Say Hello" />
      <div className='flex sm:flex-col items-center justify-between'>
         <div className='flex flex-col gap-1'>
             <p className='text-white'>{"{"}</p>
             {Object.keys(contactInfo).map((key) => (
                <p className='ml-5'>
                    <span className='text-tertiary'>"{key}" : </span>
                    <span className='text-tertiary'>"{contactInfo[key]}"</span>
                </p>
             ))}
             <p className='text-white'>{"}"}</p>
         </div>
         <img src={image} alt='contact me' className='h-[400px]'/>    
      </div>
   </div>
 )
}

export default Contact