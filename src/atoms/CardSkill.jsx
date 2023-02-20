import React from 'react'

const CardSkill = (props) => {
  const {name,detail,icon} = props
  return (
    <div className='border w-[20rem] flex items-center gap-2 border-black rounded-lg px-4 py-4'>
      <div className='w-[3rem] h-[3rem] flex justify-center '>
        <img src={icon} alt="" className='object-contain'/>
      </div>
      <div>
        <h1 className='text-[1.3rem] font-bold'>{name}</h1>
        <p className='text-gray-600 font-thin text-[1.1rem]'>{detail}</p>
      </div>
    </div>
  )
}

export default CardSkill