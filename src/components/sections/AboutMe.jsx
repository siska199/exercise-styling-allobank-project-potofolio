import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import SocialMedia from '../../atoms/SocialMedia'

const AboutMe = () => {
  const listSocialMedia = [
    {
      name : "github",
      icon: <BsGithub size={25}/>,
      url : "https://github.com/"
    },
    {
      name : "linkind",
      icon: <BsLinkedin size={25}/>,
      url : "https://github.com/"
    },
    {
      name : "intagram",
      icon: <FiInstagram size={25}/>,
      url : "https://github.com/"
    },
  ]
  return (
    <section className='container grid grid-cols-2 gap-4'>
      <div className='flex flex-col justify-center border'>
        <h5 className='h5'>Tentang Saya</h5>
        <h1 className='h1'> Siska Apriana</h1>
        <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit esse, nisi molestias nobis voluptate asperiores deleniti laborum odio error mollitia.</p>
      </div>
      <div className='border flex flex-col justify-center space-y-4'>
        <h1 className='h1'>Mari Berteman</h1>
        <p className='p'>Silahkan hubungi saya di salah satu media sosial milik saya</p>
        <ul className='flex gap-2'>
          {
            listSocialMedia.map((socialMedia,i)=>(
              <SocialMedia key={i} url={socialMedia.url} icon={socialMedia.icon}/>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default AboutMe