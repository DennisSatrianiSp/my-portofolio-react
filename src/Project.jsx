import React, {useEffect, useState} from 'react';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';
// Array sumber gambar
const imageSources = [
  '/src/assets/img/1.png',
  '/src/assets/img/2.png',
  '/src/assets/img/3.png',
  '/src/assets/img/4.png',
  '/src/assets/img/5.png',
  '/src/assets/img/6.png',
  '/src/assets/img/7.png',
  '/src/assets/img/8.png',
  '/src/assets/img/9.png',
  '/src/assets/img/10.png',
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
            <h1 className='text-2xl roboto text-green-800 lg:text-5xl animate__animated animate__bounceInLeft'>Project</h1>
            <p className='animate__animated animate__fadeInUp text-xs pt-2 lg:text-2xl lg:ml-5 text-justify'>Berikut Beberapa Project yang saya kerjakan, Selamat Melihat, saat ini saya masih belajar banyak hal..</p>
            {/* Gambar Project */}
            <div className="flex flex-wrap -mx-2 mt-4">
                {imageElements}
            </div>
            <button onClick={()=> navigate('/')} className='bg-green-400 py-2 px-3 rounded-md font-bold mt-20'>Landing Page</button>
      </main>
    </>
  )
}

export default Project
