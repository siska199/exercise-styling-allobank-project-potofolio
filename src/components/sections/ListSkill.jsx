import React from 'react'
import CardSkill from '../../atoms/CardSkill'

const ListSkill = () => {
  const listSkill = [
    {
      name : "React",
      detail:"Frontend Developer",
      icon : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      name : "Next JS",
      detail:"Frontend Developer",
      icon : "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },
    {
      name : "React Native",
      detail:"Frontend Developer",
      icon : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      name : "Next JS",
      detail:"Frontend Developer",
      icon : "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },

  ]
  return (
    <div className='w-full px-4 border py-6 h-[8rem] border-pink-700 mx-auto flex gap-8 justify-between'>
        {
            listSkill.map((skill,i)=>(
                <CardSkill key={i} name={skill.name} detail={skill.detail} icon={skill.icon}/>
            ))
        }
    </div>
  )
}

export default ListSkill