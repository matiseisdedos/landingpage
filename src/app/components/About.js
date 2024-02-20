import React from 'react'
import storytellingImage from '../../assets/svg/storytellingImage.svg'
import Image from 'next/image'

export const About = ({ id }) => {
    return (
        <>
            {/* ------------------------------------ Start Desktop Version ------------------------------------*/}
            <section className='hidden sm:grid grid-cols-2 relative h-screen bg-gray-100' id={id}>
                <div className='flex flex-col justify-center p-10 '>
                    <h2 className='text-xl text-primary font-bold pb-10'>
                        A little bit about <span className='text-borders'>mes.</span>
                    </h2>
                    <div className='space-y-4 text-xs'>
                        <p className=''>My career is at the intersection of web development and marketing, focusing on impactful web applications. From enhancing e-commerce platforms to creating educational tools, I aim to exceed user expectations.</p>
                        <p>In my dual role, I blend technical skills with marketing insights, driving engagement and growth. Projects like &quot;Surfwisely&quot; and &quot;Otherwise&quot; highlight my ability to merge innovative development with strategic marketing.</p>
                        <p>Leading &quot;Travel Finder&quot; taught me the balance between user-centric design and functionality, while &quot;Cecile&quot; deepened my e-commerce and digital marketing understanding. My background in React, Node.js, and marketing ensures a comprehensive approach to web solutions, prioritizing both technical excellence and strategic alignment.</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Image src={storytellingImage} alt='Storytelling Image' width={700} height={700} />
                </div>
            </section>
            {/* ------------------------------------ End Desktop Version ------------------------------------*/}

            {/* ------------------------------------ Start Mobile Version ------------------------------------*/}
            <section className='block sm:hidden bg-gray-100 p-4 min-h-screen text-justify' id={id + "mobile"}>
                <h2 className='text-lg text-primary font-bold pb-4 text-center'>
                    A little bit about <span className='text-borders'>me.</span>
                </h2>
                <div className='space-y-4 text-[14px]'>
                    <p className=''>My career is at the intersection of web development and marketing, focusing on impactful web applications. From enhancing e-commerce platforms to creating educational tools, I aim to exceed user expectations.</p>
                    <p>In my dual role, I blend technical skills with marketing insights, driving engagement and growth. Projects like &quot;Surfwisely&quot; and &quot;Otherwise&quot; highlight my ability to merge innovative development with strategic marketing.</p>
                    <p>Leading &quot;Travel Finder&quot; taught me the balance between user-centric design and functionality, while &quot;Cecile&quot; deepened my e-commerce and digital marketing understanding. My background in React, Node.js, and marketing ensures a comprehensive approach to web solutions, prioritizing both technical excellence and strategic alignment.</p>
                </div>
                <div className='flex justify-center mt-4'>
                    <Image src={storytellingImage} alt='Storytelling Image' width={700} height={700} />
                </div>
            </section>
        </>
    )
}
