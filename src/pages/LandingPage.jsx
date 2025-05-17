import React from 'react';
import { Form, Link } from 'react-router-dom';



function LandingPage() {
  return (
    <>
     
      <header className="flex justify-between items-center p-4 h-10 bg-emerald-300 text-white">
        <div className="text-lg font-bold">
          <a href="https://anmolchhetri.com.np" class="text-pink-600 hover:text-red-500">anmolchhetri.com.np</a>
        </div>
        <div className="flex space-x-5">
          <Link to=""><p className="text-2xl"> Shedule an Appoinment</p></Link>
          <Link to="/login">
            <p className=" p-1  bg-blue-500 text-white rounded">Login</p>
          </Link>
          <Link to="/register">
            <button className="p-1 bg-green-500 text-white rounded">Register</button>
          </Link>
        </div>
      </header>
      <navigation>
        <nav class="flex items-center justify-between p-1  text-red">
         <img src="Anmol edu.gif" alt="Logo" class="w-20 h-20 ml-7 " />
          <ul class="flex space-x-30 text-2xl">
              <li><a href="/about" class="hover:text-red-600">About us</a></li>
              <li><a href="/login" class="hover:text-red-600">Preparation Class</a></li>
              <li><a href="/myblog" class="hover:text-red-600">Blog</a></li>
              <li><a href="https://anmolchhetri.com.np" class="hover:text-red-600">Resource</a></li>
              <li><a href="#" class="hover:text-red-600">Explore</a></li>
              </ul>
                </nav>
      </navigation>
      <div className="w-full bg">
        <img src="main1.jpg" alt="looding......"  />
      </div>
      <main className="p-4 flex pt-4">
       <div><img src="main2.jpg" alt="" className='h-150 pr-15' /></div>
       <div className='m-9'><p className='text-4xl pt-11 font-bold text-red-500'>Welcome to<br/> <span className='text-blue-500'>Anmol Education zone</span></p>
       <p className='text-2xl text-green-400 pt-3'>A leading education service provider in Nepal</p>
       <p className='text-2xl pt-3'>Established with the aim of delivering quality <br /> educational services, Grace International have more <br /> than a decade long history of serving students for <br /> further studies in Australia, New Zealand, UK, USA <br /> and Canada. We also provide preparation classes of IELTS, <br /> PTE, GMAT, TOEFL and SAT.</p>
       <br /><br /> <Link to="/login">
            <p className=" p-1 pl-9 w-60 bg-blue-500 text-white rounded">Any updates on this?</p>
          </Link>
       </div>
      </main>
      <div className="p-4 flex pt-4">
        <div><img src="" alt="" /></div>
        <div></div>
      </div>
      <div className=''>
      <p><img src="study.jpg" alt="" className='h w-full' /></p>
      <center><Link to="/register">
            <p className=" text-2xl pl-5 h-9 w-60 bg-red-500 text-white rounded">Apply Now</p>
          </Link></center>
      </div>

      <footer className="bg-emerald-300 mt-6 text-white pt-2">
    <div className="flex items-center space-x-2 pl-1">
      <img src="Anmol edu.gif" alt="Anmol Education Zone Logo" className="h-40 rounded-lg shadow-md" />
      <div>
        <h2 className=" font-semibold text-4xl text-white">Anmol Education Zone</h2>
        <p className="text-white-400 text-2xl">Empowering education for a brighter future.</p>
      </div >
      
    </div>
   
</footer>

    </>
  );
}

export default LandingPage;