import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import {education} from '../../resources/education'

function Education(){
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
 return (
   <div> 
      <SectionTitle title="Education" />
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] h-full sm:flex-row sm:overflow-x-scroll sm:w-full'>
             {education.map((education,index) => (
                <div onClick={() => {
                    setselectedItemIndex(index);
                }}
                className='cursor-pointer'
                >
                    <h1 className={`text-xl px-5
                    ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>{education.graduation}</h1>
                </div>           
             ))}
        </div>
        <div className='flex flex-col gap-5 min-h-[400px] max-w-[900px]'>
             <h1 className='text-secondary text-2xl'>{education[selectedItemIndex].title}</h1>
             <h1 className='text-tertiary text-xl'>{education[selectedItemIndex].program}</h1>
             <h1 className='text-tertiary text-xl'>{education[selectedItemIndex].institution}</h1>
             <h1 className='text-tertiary text-xl'>{education[selectedItemIndex].gpa}</h1>
             <p className='text-white'>{education[selectedItemIndex].description}</p>
        </div>
      </div>
   </div>
 )
}

export default Education