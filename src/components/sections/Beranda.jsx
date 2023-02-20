import React from 'react'
import Button from '../../atoms/Button'

const Beranda = () => {
  return (
    <section className='container grid grid-cols-2'>
      {/* Introduction */}
      <div className='space-y-4 border flex flex-col justify-center'>
        <div>
          <h5 className='h5'>Halo Semua 🙂, saya</h5>
          <h1 className='h1'>Siska Apriana</h1>
          <h4 className='h4'>Fornt End Developer <span className='text-gray-600 text-[1.8rem]'>| UI Designer</span> </h4>
        </div>
        <p className='p'>
          Lorem ipsum dolor sit amet consectetur veniam tempore saepe maxime, architecto, quos magni ad minima dolorum nesciunt vitae, quod unde velit 
          pariatur <span className='font-bold text-black'>nulla quidem odit amet sapiente?</span> 
        </p>
        <Button name={"Download CV Saya"} customeStyles={"w-[15rem] font-semibold bg-rose-600 text-white py-2 px-6 rounded-full"} />
      </div>
      {/* Gambar */}
      <div className='border flex justify-center items-center'>
        <img src={"me.png"} alt="" className='w-[30rem] border border-black '/>
      </div>
    </section>
  )
}

export default Beranda