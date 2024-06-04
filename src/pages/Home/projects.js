import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import {projects} from '../../resources/projects'

function Projects(){
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
 return (
    <div> 
    <SectionTitle title="Projects" />
    <div className='flex py-10 gap-20 sm:flex-col'>
      <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] h-full sm:flex-row sm:overflow-x-scroll sm:w-full'>
           {projects.map((projects,index) => (
              <div onClick={() => {
                  setselectedItemIndex(index);
              }}
              className='cursor-pointer'
              >
                  <h1 className={`text-xl px-5
                  ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>{projects.title}</h1>
              </div>           
           ))}
      </div>
      <div className='flex items-center justify-center gap-10 sm:flex-col'>
       <img src={projects[selectedItemIndex].image} alt='chefconnect logo' className='h-60 w-72 rounded-full'/>
       <div className='flex flex-col gap-5'>
           <h1 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h1>
           <div className='flex flex-wrap gap-2 mt-5'>
        {projects[selectedItemIndex].technologies.map((technology,index) => (
          <div className='border border-tertiary rounded-lg py-3 px-10'> 
              <h1 className='text-tertiary'>{technology}</h1>
          </div>
        ))}
        </div>
           <p className='text-white'>{projects[selectedItemIndex].description}</p>
      </div>
      </div>   
    </div>
 </div>
 )
}

export default Projects