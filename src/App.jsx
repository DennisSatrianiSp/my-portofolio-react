import React, { useEffect } from 'react';
import './App.css';
import 'animate.css/animate.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';



const App = () => {
  useEffect(() => {
    // Jeda Waktu untuk element muncul
    const letters = document.querySelectorAll('.animate-letter');
    
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 300}ms`; // Adjust delay as needed
    });
    // Setelah muncul nanti masukan class baru
    setTimeout(()=>{
      const judulElement = document.getElementById('judul');
        judulElement.classList.add('animate__animated', 'animate__flash');
    },2800);
    setTimeout(()=>{
     const pageKiri = document.getElementById('kiri');
     const pageKanan = document.getElementById('kanan');
     const subtitle = document.getElementById('sub');
     pageKanan.classList.remove('display-none');
     subtitle.classList.remove('display-none');
     subtitle.classList.add('animate__animated','animate__fadeInLeft');
     pageKiri.style.width = '50%';
    },3000);
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <main className='flex min-h-screen'>
        <div className='bg-gradient-to-r from-green-700 to-emerald-600' id='kiri'>
        <h1 className='text-2xl lg:text-8xl text-white roboto pt-96 lg:pt-72 text-center' id='judul'>
          <span className='animate__animated animate__fadeInUp animate-letter'>P</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>O</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>R</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>T</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>O</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>F</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>O</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>L</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>I</span>
          <span className='animate__animated animate__fadeInUp animate-letter'>O</span>
        </h1>
        <h2 className='text-white text-center text-sm lg:text-3xl display-none' id='sub'>Fullstack Web Developer</h2>
      </div>
      <div className="display-none ml-1 mt-96 lg:mt-72 lg:ml-auto lg:mr-auto animate__animated animate__backInUp" id='kanan'>
        <ul className='lg:text-3xl text-xs mb-5 lg:mb-9'>
          <li><FontAwesomeIcon icon={faGithub} /> : github.com/DennisSatrianiSp</li>
          <li><FontAwesomeIcon icon={faInstagram} /> : @dnnisspto_</li>
          <li><FontAwesomeIcon icon={faLinkedin} /> : linkedin.com/in/dennissp</li>
        </ul>
        <button onClick={()=> navigate('/about')} className='bg-gradient-to-r from-cyan-500 to-teal-600 lg:py-5 lg:text-xl lg:px-10 lg:ml-36 ml-10 text-white py-2 px-2 rounded-md'>See Next ?</button>
      </div>
      </main>
    </div>
  );
}

export default App;
