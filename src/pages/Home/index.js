import React from 'react'
import Header from '../../components/header'
import Intro from './intro'
import About from './about'
import Education from './education'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'


function Home() {
  return (

    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home