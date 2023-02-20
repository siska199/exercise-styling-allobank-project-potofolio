import React from 'react'

const Navbar = () => {
  const listMenuItem = ["Beranda", "Tentang Saya", " Portofolio","Pengalaman","Sertifikat"]
  return (
    <nav className='sticky top-0 bg-white h-[5rem] flex justify-between items-center border border-red-600 w-full px-4'>
      <h1 className='text-xl text-emerald-400 font-bold'>Siska Apriana</h1>
      <ul className='flex gap-[3rem] font-medium'>
        {
          listMenuItem.map((menuItem)=>(
            <li className='cursor-pointer hover:text-emerald-400'>{menuItem}</li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar