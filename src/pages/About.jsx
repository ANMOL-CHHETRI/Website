import React from 'react'
import { Form, Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <nav class="flex bg-cyan-600 items-center gap-10  text-white">
    <div>
        <img src="Anmol edu.gif" alt="Anmol Education Zone" className='h-40 w-auto rounded-b-full ml-3' />
    </div>
    <div>
        <p class="text-5xl font-bold text-blue-900">Anmol <span className='text-amber-300'>Education Zone</span></p>
        <p class="text-3xl">Behind your every dreams and sucess</p>
    </div>
    
    <div className='absolute right-0'>
        <Link to="/register"><img src="join.gif" alt=""  className='h-40'/></Link>
    </div>
</nav>
<div className='mt-8'><img src="study.jpg" alt="" /></div>
<div className='mt-8'>
    <center><p className='text-blue-500 font-bold text-4xl'>One of the leading educational consultancy in Nepal guiding students to <br /> meet their dreams.</p></center>
</div>
    <div className='mt-8'>
      <img src="Anmol Chhetri.jpg" alt="" />
    </div>
       <footer className="bg-blue-500 mt-9 text-white pt-2">
    <div className="flex items-center space-x-2 pl-1">
      <img src="Anmol edu.gif" alt="Anmol Education Zone Logo" className="h-40 rounded-lg shadow-md" />
      <div>
        <h2 className=" font-semibold text-4xl text-white">Anmol Education Zone</h2>
        <p className="text-white-400 text-2xl">Empowering education for a brighter future.</p>
      </div>
      
    </div>
   
</footer>
    </>
  )
}

export default About
