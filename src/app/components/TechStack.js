'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import tailwindLogo from "../../assets/png/tailwind-logo.png";
import cssLogo from "../../assets/webp/css-logo.webp";
import javascriptLogo from "../../assets/webp/JavaScript-logo.webp";
import reactLogo from "../../assets/webp/react-logo.webp";
import tsLogo from "../../assets/png/ts-logo.png";
import nextLogo from "../../assets/png/next-logo.png";
import vsCode from "../../assets/png/VSCode.png";
import github from "../../assets/png/Github.png";
import gitLogo from "../../assets/png/git-logo.png";
import htmlLogo from "../../assets/png/html-logo.png";
import figmaSvg from "../../assets/svg/Figma.svg";
import nodeLogo from "../../assets/png/node-logo.png";
import logoJest from "../../assets/png/jest-logo.png";


export const TechStack = ({ id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(technologies.length / itemsPerPage);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const visibleTechnologies = technologies.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    const buttonClases = 'flex items-center justify-center text-6xl hover:text-borders text-gray-100 transition-all duration-300 cursor-pointer'
    return (
        <>
            {/* ------------------------------------ Start Desktop Version ------------------------------------*/}
            <section className='hidden sm:flex items-center justify-center h-screen bg-primary' id={id}>
                <div className='w-full m-10'>
                    <h2 className='text-xl text-gray-100 font-bold py-10 text-center capitalize'>
                        Some tools I use <span className='text-secondary'>everyday.</span>
                    </h2>
                    <div className='grid grid-cols-12 gap-4 pb-10'>
                        <button onClick={prev} className={buttonClases}>
                            {/* Aca ira el boton para mover a la izquierda */}
                            <IoIosArrowBack />
                        </button>
                        <div className='col-span-10 grid grid-cols-3 gap-10 transition-transform duration-500'>
                            {
                                visibleTechnologies.map(technology => (
                                    <div key={technology.id} className='flex flex-col justify-center items-center h-[300px] p-6 bg-gray-200 rounded-xl border-4 border-gray-300 transition-all duration-300 hover:scale-105'>
                                        <Image src={technology.image} alt={technology.alt} width={128} height={128} className='mb-10 object-cover mb-10 rounded-xl h-32 w-32' />
                                        <div className='flex w-full items-center justify-between'>
                                            <p className='text-sm text-primary font-bold'>{technology.name}</p>
                                            <p className='text-xs text-[#808080] capitalize bg-white px-3 py-1.5 rounded-3xl border border-gray-400'>{technology.type}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <button onClick={next} className={buttonClases}>
                            {/* Aca ira el boton para mover a la derecha */}
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div>
                        <p className='text-borders text-center font-bold'>*Note: My toolkit extends beyond these, ensuring versatility and innovation in my work.</p>
                    </div>
                </div>

            </section>
            {/* ------------------------------------ End Desktop Version ------------------------------------*/}

            {/* ------------------------------------ Start Mobile Version ------------------------------------*/}

            <section className='block sm:hidden bg-primary p-4 ' id={id + "mobile"}>
                <h2 className='text-md text-gray-100 font-bold py-4 text-center capitalize'>
                    Some tools I use <span className='text-secondary'>everyday.</span>
                </h2>
                <div className='flex items-center justify-center w-full overflow-x-scroll  overflow-y-hidden p-10'>
                    <div className='flex flex-nowrap min-w-full space-x-6'>
                        {technologies.map(technology => (
                            <div key={technology.id} className='flex flex-col min-w-[80%] items-center p-6 bg-gray-100 rounded-xl border-4 border-gray-400 transition-all duration-300 hover:scale-105'>
                                <Image src={technology.image} alt={technology.alt} width={128} height={128} className='mb-10 object-cover mb-10 rounded-xl h-32 w-32' />
                                <div className='flex flex-col grow w-full items-center justify-between'>
                                    <p className='text-sm text-primary font-bold'>{technology.name}</p>
                                    <p className='text-[12px] text-[#808080] capitalize bg-white px-3 py-1.5 rounded-3xl border border-gray-300 mt-2'>{technology.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                {/* <div>
                    // It would be nice to have a swipe to see more
                    <p className='text-gray-100 text-center text-xs text-white'>Swipe to see more...</p>
                </div> */}
                <div>
                    <p className='text-borders text-center font-bold'>*Note: My toolkit extends beyond these, ensuring versatility and innovation in my work.</p>
                </div>
            </section>


            {/* ------------------------------------ End Mobile Version ------------------------------------*/}
        </>
    )
}
const technologies = [
    {
        id: "1-javascript",
        name: 'JavaScript',
        image: javascriptLogo,
        alt: 'Javascript Logo',
        type: 'language'
    },
    {
        id: "5-typescript",
        name: 'Typescript',
        image: tsLogo,
        alt: 'Typescript Logo',
        type: 'language'
    },
    {
        id: "2-react",
        name: 'React',
        image: reactLogo,
        alt: 'React Logo',
        type: 'framework'
    },
    {
        id: "3-next",
        name: 'Next',
        image: nextLogo,
        alt: 'Next Logo',
        type: 'Web Framework'
    },
    {
        id: "4-tailwind",
        name: 'Tailwind',
        image: tailwindLogo,
        alt: 'Tailwind Logo',
        type: 'CSS'
    },
    {
        id: "6-html",
        name: 'HTML',
        image: htmlLogo,
        alt: 'HTML Logo',
        type: 'Markup Language'
    },
    {
        id: "7-css",
        name: 'CSS',
        image: cssLogo,
        alt: 'CSS Logo',
        type: 'Style Sheet Language'
    },
    {
        id: "8-git",
        name: 'Git',
        image: gitLogo,
        alt: 'Git Logo',
        type: 'Version Control'
    },
    {
        id: "9-github",
        name: 'Github',
        image: github,
        alt: 'Github Logo',
        type: 'Version Control'
    },
    {
        id: "10-jest",
        name: 'Jest',
        image: logoJest,
        alt: 'Jest Logo',
        type: 'Testing'
    },
    {
        id: "12-visual-studio-code",
        name: 'Visual Studio Code',
        image: vsCode,
        alt: 'Visual Studio Code Logo',
        type: 'Code Editor'
    },
    {
        id: "11-figma",
        name: 'Figma',
        image: figmaSvg,
        alt: 'Figma Logo',
        type: 'Design'
    },
    {
        id: "13-nodejs",
        name: 'NodeJS',
        image: nodeLogo,
        alt: 'NodeJS Logo',
        type: 'Runtime Environment'
    }
]