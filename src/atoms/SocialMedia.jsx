import React from 'react'

const SocialMedia = (props) => {
  const {url, icon} = props
  return (
    <div onClick={()=>window.open(url)} className='text-lg border  text-emerald-600 border-black p-2 rounded-full hover:border-none hover:bg-emerald-400 hover:text-white cursor-pointer'>
        {icon}
    </div>
  )
}

export default SocialMedia