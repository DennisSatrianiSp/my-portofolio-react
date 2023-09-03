import React, {useEffect} from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCode } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
// Gambar
import Formal from './assets/img/formal.jpeg';
import html from './assets/img/html.png'
import css from './assets/img/css.png'
import js from './assets/img/js.png'
import php from './assets/img/php.png'
import laravel from './assets/img/laravel.png'
import react from './assets/img/react.png'
import tailwind from './assets/img/tailwind.jpg'
import vite from './assets/img/vite.png'
import nextjs from './assets/img/nextjs.png'
import boostrap from './assets/img/boostrap.png'
import mysql from './assets/img/mysql.png';

import linux from './assets/img/kali.png'
import windows from './assets/img/windows.png'
import vscode from './assets/img/vscode.png'
import xampp from './assets/img/xampp.png'

import 'animate.css/animate.min.css'; 

const onTop = () => {
  window.scrollTo(0,0);
}

const About = () => {
    const navigate = useNavigate();

    useEffect(() =>{
      onTop();
    })
  return (
    <div>
      <main className='min-h-screen px-5  py-3'>
          {/* Atas */}
          <h1 className='text-2xl roboto text-green-800 lg:text-5xl animate__animated animate__bounceInLeft'><FontAwesomeIcon icon={faUser} className='mr-2' />About Me</h1>
          <div className='flex'>
          <img src={Formal} alt="" className='gambar animate__animated animate__bounceInRight' />
          <p className='animate__animated animate__fadeInUp text-xs pt-2 lg:text-2xl lg:ml-5 text-justify'>Hai, Perkenalkan Saya Dennis Satriani Sucipto Putra, Saya adalah Mahasiswa Program Studi Teknik Informatika, Universitas Catur Insan Cendikia di Kota Cirebon. Hobi saya adalah mempelajari hal baru, dan saya memiliki keterampilan komunikasi yang sangat baik. Saya juga sedang mempelajari teknologi seperti React, Laravel, dan Next.js untuk mengembangkan keterampilan saya dalam pemrograman web.</p>
          </div>
          {/* Tengah */}
          <h1 className='text-2xl mt-5 roboto text-green-800 lg:text-5xl'><FontAwesomeIcon icon={faCode} className='mr-2' />Skill Bahasa Pemograman dan FrameWork</h1>
          <div className="flex">
            <img src={html} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={css} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={js} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={php} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
             <img src={laravel} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
              <img src={react} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={tailwind} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={vite} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={nextjs} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={boostrap} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={mysql} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
          </div>
          {/* Bawah */}
          <h1 className='text-2xl mt-5 roboto text-green-800 lg:text-5xl'><FontAwesomeIcon icon={faWindows} className='mr-3' />Software yang di gunakan</h1>
          <div className="flex">
            <img src={linux} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={windows} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={xampp} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={vscode} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
          </div>
          <button onClick={()=> navigate('/')} className='bg-green-400 py-2 px-3 rounded-md font-bold mt-20'>Landing Page</button>
          <button onClick={()=> navigate('/projects')} className='bg-green-400 py-2 px-3 rounded-md font-bold mt-20 float-right'>Project Page</button>
      </main>
    </div>
  )
}

export default About
