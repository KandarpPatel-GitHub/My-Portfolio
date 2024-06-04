import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import image from '../../images/19199262.png'

function About(){
  const skills = [
    "C#",
    "ASP.Net Core",
    "JavaScript",
    "React",
    "Node",
    "Rest APIs",
    "MS SQL Server"
  ]
 return (
   <div>
    <SectionTitle title="About Me" />
    <div className='flex w-full items-center sm:flex-col'>
    <img className='h-[70vh] w-1/2 sm:w-full' src={image}  alt='Web-Developer'></img>
      {/* <div className='w-1/2 sm:w-full'>
         
      </div>   */}
      <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
        <p className='text-white'>
        Welcome to my portfolio! I am Kandarp Patel, a dedicated and innovative full-stack web developer with a passion for crafting dynamic and responsive websites. With an Advanced Diploma in Computer Programming and Analysis, I specialize in developing comprehensive web applications from the ground up. I thrive on turning complex problems into seamless digital experiences and constantly seek out new challenges to expand my skill set.
        </p>
        <p className='text-white'>
        My expertise spans the entire web development stack. On the front end, I am proficient in HTML, CSS, and JavaScript, along with modern frameworks and libraries such as React, Bootstrap, and Tailwind. I have a strong eye for design and user experience, ensuring that the interfaces I create are both visually appealing and highly functional. On the back end, I have extensive experience with server-side technologies including ASP.Net Core, and Node.js, and I am well-versed in working with databases such as MySQL, and OracleDb. Additionally, I am skilled in version control systems like Git, containerization with Docker, and deploying applications on cloud platforms like Google Firebase.
        </p>
        <p className='text-white'>
        Beyond coding, I enjoy participating in hackathons, contributing to open-source projects, or exploring the latest tech trends, which often inspire my professional projects. Let's connect and explore how we can build something incredible together!
        </p>
      </div>
    </div>
    <div className='py-10'>
        <h1 className='text-tertiary text-xl'>Here are the few technologies I've been working with recently:</h1>
        <div className='flex flex-wrap gap-5 mt-5'>
        {skills.map((skill,index) => (
          <div className='border border-tertiary rounded-lg py-3 px-10'> 
              <h1 className='text-tertiary'>{skill}</h1>
          </div>
        ))}
        </div>
    </div>
   </div>
 )
}

export default About