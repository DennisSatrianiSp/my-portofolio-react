import React, {useEffect, useState} from 'react';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

// import gambar
import page1 from './assets/img/porto1a.png';
import page2 from './assets/img/porto2b.png';
import page3 from './assets/img/porto3c.png';
import page4 from './assets/img/porto4d.png';
import page5 from './assets/img/porto5e.png';
import page6 from './assets/img/porto6f.png';
import page7 from './assets/img/porto7g.png';
import page8 from './assets/img/porto8h.png';
import page9 from './assets/img/porto9i.png';
import page10 from './assets/img/porto10j.png';
// Array sumber gambar
const imageSources = [
  page1,page2,page3,page4,page5,page6,page7,page8,page9,page10
];

const Project = () => {
  const navigate = useNavigate();

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    // Tinggi dari elemen yang ingin dianimasikan
    const elementHeight = 100; // Sesuaikan sesuai kebutuhan
    
    // Jika posisi scroll lebih tinggi dari elemen yang ingin dianimasikan, aktifkan animasi
    if (window.scrollY > elementHeight) {
      setShouldAnimate(true);
    }
  };

  // Tambahkan event listener untuk peristiwa scroll
  window.addEventListener('scroll', handleScroll);

  // Clean up event listener pada unmount komponen
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

 // Membuat array elemen gambar berdasarkan array sumber gambar
  const imageElements = imageSources.map((source, index) => (
    <div key={index}   className={`w-full lg:w-1/2 px-2 mb-4 ${
      shouldAnimate ? 'animate__animated animate__fadeInUp' : ''
    }`}>
      <img src={source} className='w-full h-auto' alt={`Gambar ${index + 1}`} />
    </div>
  ));

  return (
    <>
      <main className='min-h-screen px-5 py-3'>
            <h1 className='text-2xl roboto text-green-800 lg:text-5xl animate__animated animate__bounceInLeft'><FontAwesomeIcon icon={faListCheck} className='mr-3'/>Project</h1>
            <p className='animate__animated animate__fadeInUp text-xs pt-2 lg:text-2xl lg:ml-5 text-justify'>Berikut Beberapa Project yang saya kerjakan, Selamat Melihat, saat ini saya masih belajar banyak hal..</p>
            {/* Gambar Project */}
            <div className="flex flex-wrap -mx-2 mt-4">
                {imageElements}
            </div>
            <button onClick={()=> navigate('/')} className='bg-green-400 py-2 px-3 rounded-md font-bold mt-20'>Landing Page</button>
               <button onClick={()=> navigate('/detail')} className='bg-green-400 py-2 px-3 rounded-md font-bold mt-20 float-right'>Detail Project Page</button>
      </main>
    </>
  )
}

export default Project