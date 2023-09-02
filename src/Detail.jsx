import React, { useEffect}from 'react';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';
import html from './assets/img/html.png'
import css from './assets/img/css.png'
import js from './assets/img/js.png'
import php from './assets/img/php.png'
import boostrap from './assets/img/boostrap.png'
import mysql from './assets/img/mysql.png';

// Import gambar
import detail1 from './assets/img/detail1.png'
import detail2 from './assets/img/detail2.png'
import detail3 from './assets/img/detail3.png'
import detail4 from './assets/img/detail4.png'
import detail5 from './assets/img/detail5.png'
import detail6 from './assets/img/detail6.png'
import detail7 from './assets/img/detail7.png'
import detail8 from './assets/img/detail8.png'
import detail9 from './assets/img/detail9.png'
import detail10 from './assets/img/detail10.png'
import detail11 from './assets/img/detail11.png'
import detail12 from './assets/img/detail12.png'
import detail13 from './assets/img/detail13.png'
import detail14 from './assets/img/detail14.png'
import detail15 from './assets/img/detail15.png'
import detail16 from './assets/img/detail16.png'
import detail17 from './assets/img/detail17.png'
import detail18 from './assets/img/detail18.png'
import detail19 from './assets/img/detail19.png'
import detail20 from './assets/img/detail20.png'
import detail21 from './assets/img/detail21.png'
import detail22 from './assets/img/detail22.png'


// Array sumber gambar
const imageSources = [
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  detail7,
  detail8,
  detail9,
  detail10,
  detail11,
  detail12,
  detail13,
  detail14,
  detail15,
  detail16,
  detail17,
  detail18,
  detail19,
  detail20,
  detail21,
  detail22,
];

const onTop = () => {
    window.scrollTo(0,0);
}


const Detail = () => {
    useEffect(()=>{
        onTop();
    });
    const navigate = useNavigate();

     // Membuat array elemen gambar berdasarkan array sumber gambar
  const imageElements = imageSources.map((source, index) => (
    <div key={index}   className='w-full lg:w-1/2 px-2 mb-4'>
      <img src={source} className='w-full h-auto' alt={`Gambar ${index + 1}`} />
    </div>
  ));
  return (
    <>
      <main className='min-h-screen px-5 py-3'>
        <h1 className='text-2xl roboto text-green-800 lg:text-5xl animate__animated animate__bounceInLeft'>Detail Project</h1>
        <p className='animate__animated animate__fadeInUp text-xs pt-2 lg:text-2xl lg:ml-5 text-justify'>Halaman berikut akan menampilkan sebuah project yang menurut saya paling terbaik diantaranya. project ini membuat saya lulus dan kompeten saat sidang oleh LSP Informatika untuk mendapatkan sertifikat kompetensi dari BNSP.</p>
        <h1 className='text-2xl roboto text-green-800 lg:text-5xl animate__animated animate__bounceInLeft mt-3'>Tentang Project</h1>
         <p className='animate__animated animate__fadeInUp text-xs pt-2 lg:text-2xl lg:ml-5 text-justify'>dalam project kali ini saya membuat sebuah web aplikasi tentang pendaftaran beasiswa. web ini saya buat menggunakan teknologi boostrap css untuk framewrok css, html, css native, dan JavaScript native. tak lupa saya menyertakan mysql sebagai bahasa penghubung antara database dan juga aplikasi saya. sistem yang saya sajikan adalah sebuah sistem yang terkait dengan database pusat dari kampus tersebut. jadi data mahasiswa di dapat dari great sistem kampus atau siakad.</p>
        <h1 className='text-2xl mt-5 roboto text-green-800 lg:text-5xl'>Bahasa Pemograman dan Framewrok yang digunakan.</h1>
          <div className="flex mt-3">
            <img src={html} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={css} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={js} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
            <img src={php} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={boostrap} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
               <img src={mysql} alt="" className=' w-5 lg:w-12 mt-2 ml-2'/>
          </div>
        <h1 className='text-2xl roboto text-green-800 lg:text-5xl animate__animated animate__bounceInLeft mt-5'>Screenshoot aplikasi</h1>
        {/* Gambar Project */}
            <div className="flex flex-wrap -mx-2 mt-4">
                {imageElements}
            </div>
        <div className="flex justify-between">
            <button onClick={()=> navigate('/')} className='bg-green-400 lg:py-2 lg:px-3 rounded-md font-bold mt-20 p-2'>Landing Page</button>
        <button onClick={()=> navigate('/about')} className='bg-green-400 lg:py-2 lg:px-3 rounded-md font-bold mt-20'>About Page</button>
        <button onClick={()=> navigate('/projects')} className='bg-green-400 lg:py-2 lg:px-3 rounded-md font-bold mt-20'>Project Page</button>
        </div>
      </main>
    </>
  )
}

export default Detail
