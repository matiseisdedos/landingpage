import React from 'react'
import { colors } from '../constants'
import Image from 'next/image'
import backgroundSvg from '../../assets/svg/background.svg'
import portfolioPicture from '../../assets/png/portfolio-picture.png'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const heroInfo = {
  title: 'Frontend Developer',
  description: 'Combining cutting-edge development with strategic marketing to create web applications that drive user interaction and business success.',
  skills: [
    'Proficient in React, skilled at creating web apps informed by core marketing strategies.',
    'Strong communicator, adept at translating client needs into technical solutions.',
  ],

}
const socialsArray = [
  {
    id: '1-linkedin',
    link: 'https://www.linkedin.com/in/matiseisdedos/',
    icon: <FaLinkedinIn className='text-primary' />
  },
  {
    id: '2-github',
    link: 'https://github.com/matiseisdedos',
    icon: <FaGithub className='text-primary' />
  }
]

export const Hero = ({ id }) => {

  return (
    <>
      {/* ------------------------------------ Start Desktop Version ------------------------------------*/}
      <section className='hidden sm:grid grid-cols-3 relative h-screen text-white ' id={id}>
        <div className='absolute top-5 left-10 text-secondary font-bold text-base'>Matias Seisdedos</div>
        <div className='col-span-2 bg-primary flex flex-col justify-center px-10'>
          <h1 className='text-xl text-secondary font-bold uppercase'>
            Frontend
            <br />
            Developer.
          </h1>
          <p className='py-4 text-sm max-w-[80%]'>{heroInfo.description}</p>
          <div className='grid grid-cols-2 gap-4 text-secondary text-sm max-w-[80%]'>
            {/* Cambiar por algo combinando marketing y programacion */}
            <p>{heroInfo.skills[0]}</p>
            <p>{heroInfo.skills[1]}</p>
          </div>
          <div className='text-base mt-8'>
            <p>Let&apos;s connect</p>
            <div className='flex items-center mt-4 space-x-4'>
              {
                socialsArray.map(social => (
                  <SocialLinks key={social.id} link={social.link} icon={social.icon} />
                ))
              }
            </div>
          </div>
        </div>
        <div className='bg-secondary'></div>
        <div className='absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 z-10 ' >
          <Image src={portfolioPicture} alt='Picture of the author' className='object-cover' width={200} height={200} priority/>
        </div>
        <div className='absolute top-1/2 left-2/3 transform -translate-x-[calc(50%-20px)] -translate-y-[calc(50%-20px)]' style={{ width: '700px', height: '700px' }}>
          <Image src={backgroundSvg} alt='Background Svg' width={700} height={700} priority/>
        </div>
      </section>
      {/* ------------------------------------ End Desktop Version ------------------------------------*/}

      {/* ------------------------------------ Start Mobile Version ------------------------------------*/}
      <section className='block sm:hidden relative h-screen' id={id + "mobile"}>
        <div className='h-3/5 bg-primary p-4 grid text-white' >
          <header className='text-secondary font-bold text-base'> Matias Seisdedos</header>
          <h1 className='text-xl text-secondary font-bold uppercase'>
            Frontend
            <br />
            Developer.
          </h1>
          <p className='py-4 text-xs'>{heroInfo.description}</p>
          <div className='grid grid-cols-2 gap-2 text-secondary text-sm'>
            <p>{heroInfo.skills[0]}</p>
            <p>{heroInfo.skills[1]}</p>
          </div>
          <div className='text-base mt-8 grid grid-cols-2 justify-center items-center'>
            <p>Let&apos;s connect</p>
            <div className='flex items-center mt-4 space-x-4'>
              {
                socialsArray.map(social => (
                  <SocialLinks key={social.id} link={social.link} icon={social.icon} />
                ))
              }
            </div>
          </div>
        </div>
        <div className='h-2/5 bg-secondary flex justify-center items-center relative overflow-hidden'>
          <div className='z-10 max-w-[50%] bg-gray-200'>
            <Image src={portfolioPicture} alt='Picture of the author' className='object-cover' priority/>
          </div>
          <div className='absolute inset-0 z-0 top-10 left-10 scale-[2]'>
            <Image src={backgroundSvg} alt='Background Svg' className='object-fill' priority/>
          </div>
        </div>
      </section>
    </>
  )
}

const SocialLinks = ({ icon, link }) => {
  return (
    <a className='w-10 h-10 rounded-full bg-secondary flex items-center justify-center' href={link} target="_blank">
      {icon}
    </a>
  )
}