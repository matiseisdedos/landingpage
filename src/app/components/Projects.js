'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import SmallSwLogo from '../../assets/png/logoSmallSw.png'
import SwPreview from '../../assets/png/sw-preview.png'
import guidexPreview from '../../assets/png/guidex-preview.webp'
import guidexIcon from '../../assets/ico/guidex-logo.ico'
import phillips66Icon from '../../assets/svg/p66.svg'
import p66Preview from '../../assets/png/p66-preview.png'
import logoCecile from '../../assets/webp/logo-cecile.webp'
import cecilePreview from '../../assets/png/cecile-preview.png'
import otherwisePreview from '../../assets/png/otherwise-preview.png'
import otherwiseLogo from '../../assets/webp/otherwise-logo.webp'
import travelFinderPreview from '../../assets/png/travel-finder.png'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { SiYourtraveldottv } from "react-icons/si";

const projects = [
    {
        id: '1',
        name: 'Surfwisely',
        description: 'Surfwisely was designed to address the crucial need for cybersecurity education among K-12 students through a gamified learning experience. The main goal was to create an engaging, interactive platform that would make the learning process both effective and enjoyable for students.',
        role: 'As the Lead Frontend Developer, I spearheaded the development of a comprehensive administration portal for teachers and played a key role in integrating payment functionalities using Stripe. My responsibilities extended to the creation of interactive activities for the student-facing side of the platform and ensuring the timely resolution of any bugs or issues that arose.',
        link: 'https://www.surfwisely.com',
        image: SmallSwLogo,
        preview: SwPreview
    },
    {
        id: '2',
        name: 'Guidex',
        description: 'Guidex was envisioned as a platform to connect individuals seeking guidance with experts in various outdoor activities. The primary goal was to facilitate a seamless matchmaking experience, enabling users to find and engage with guides based on their interests and needs.',
        link: 'https://guided-expeditions.com/',
        role: "As a Frontend Developer transitioning to Frontend Team Leader at Guidex, my role was pivotal in shaping the platform. I led the development and implementation of user-centric dashboards, developed dynamic search features, and crafted key internal pages. My work focused on enhancing user experience through personalized search filters, adapting to evolving project needs within the MVP framework. This transition highlights my ability to innovate and lead in a fast-paced development environment.",
        image: guidexIcon,
        preview: guidexPreview
    },
    {
        id: '3',
        name: 'Phillips 66',
        description: "The primary objective of my engagement with Phillips 66 was to customize a CMS platform to meet the company's specific design needs. This customization aimed to empower non-developer staff to manage the company's website content effectively, ensuring that the platform was both user-friendly and versatile in content management capabilities.",
        role: "As a Frontend Developer, I was responsible for customizing the CMS platform to meet the client's specific design needs. My role involved developing a user-friendly interface for the CMS, ensuring that non-developer staff could manage the website content effectively. I also played a key role in integrating the CMS with the website, ensuring that the platform was versatile in its content management capabilities.",
        link: 'https://www.phillips66.com/',
        image: phillips66Icon,
        preview: p66Preview
    },
    {
        id: '4',
        name: 'Otherwise',
        description: "The project aimed to launch a female-focused e-commerce platform, integrating it with a domain and leveraging advertising tools like Facebook ads to maximize its reach. The objective was to establish an online presence that could extend the brand's market beyond its physical location, thereby significantly expanding its customer base.",
        link: 'https://otherwise.com.ar',
        role: "In my capacity as a Web Developer for the Otherwise project, I led the technical deployment of the e-commerce site, managing its setup, domain and server integration, payment gateway connections, and analytics implementation. My efforts were instrumental in creating a fully functional and manageable online store, enabling the brand to broaden its reach and effectively engage with a wider audience.",
        image: otherwiseLogo,
        preview: otherwisePreview
    },
    {
        id: '5',
        name: 'Cecile Atelier',
        description: "Cecile Atelier is an exclusive e-commerce boutique for high-end women's fashion and unique accessories, such as ceramic vases and jewelry holders. It aims to provide a curated shopping experience for unique and exclusive items.",
        role: `In my capacity as Web Developer for "Cecile Atelier" I was instrumental in architecting and deploying the e-commerce infrastructure, ensuring seamless integration of domain, payment gateways, and analytics to facilitate a premium online shopping environment. This initiative was pivotal in enhancing the boutique's digital footprint and supporting its upscale market positioning.`,
        link: 'https://www.cecilebasics.ar',
        image: logoCecile,
        preview: cecilePreview
    },
    {
        id: '6',
        name: 'Travel Finder',
        description: "Is a platform developed during a bootcamp to facilitate finding affordable airline tickets and connecting with tour guides, incorporating real-world project execution techniques like sprints and project management roles.",
        role: `As a Full Stack Developer, I contributed to key features such as dashboards and search functionalities, ensuring the platform's usability and efficiency. I played a pivotal role in integrating front and back-end technologies to deliver a seamless service.`,
        // image: SmallSwLogo,
        preview: travelFinderPreview,
        icon: <SiYourtraveldottv size={"75"} />,
        link: 'https://lowhenry-psi.vercel.app/'
    }
    // Otherwise 
    // Travel finder
]

export const Projects = ({ id }) => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    const project = projects[currentProject];

    const buttonClasses = 'flex items-center justify-center text-xl hover:text-borders';
    const buttonClassesMobile = 'flex items-center justify-center text-xl hover:text-borders';

    const variants = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 200 },
    };

    return (
        <>
            {/* ------------------------------------ Start Desktop Version ------------------------------------*/}
            <section className='hidden sm:block bg-gray-100 h-screen' id={id}>
                <div className='h-full'>
                    <div className='text-center'>
                        <h2 className='text-xl text-primary font-bold capitalize'>
                            Projects & ideas <span className='text-borders'>I&apos;ve worked on.</span>
                        </h2>
                        <div className='grid grid-cols-12 m-10'>
                            <button onClick={previousProject} className={buttonClasses}>
                                <IoIosArrowBack />
                            </button>
                            <motion.div
                                key={project.id}
                                className='col-span-10'
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='bg-gray-200 rounded-xl border grid grid-cols-10 py-14 h-full'>
                                    <div className='col-span-6 text-left pl-14 grid'>
                                        {
                                            project.image ?
                                                <Image src={project.image} alt={project.name} width={75} height={75} className='rounded-xl bg-transparent' />
                                                :
                                                project.icon
                                        }
                                        <div className='pr-16'>
                                            <h3 className='text-md font-bold pt-4'>{project.name}</h3>
                                            <div className='text-xs'>
                                                <p className='pt-4'><span className='font-bold'>Project Objective:</span> {project.description}</p>
                                                <p className='pt-4'><span className='font-bold'>My Role:</span> {project.role}</p>
                                            </div>
                                        </div>
                                        <div className='flex space-x-4 pt-4'>
                                            <a href={project.link} target='_blank' rel='noreferrer'>
                                                <button className='bg-primary text-white px-6 py-3 rounded-xl'>Visit Site</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-span-4 flex justify-end'>
                                        <Image src={project.preview} alt={project.name} width={570} height={440} className='bg-transparent object-scale-down max-h-[570px]' />
                                    </div>
                                </div>
                            </motion.div>
                            <button onClick={nextProject} className={buttonClasses}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------------ End Desktop Version ------------------------------------*/}

            {/* ------------------------------------ Start Mobile Version ------------------------------------*/}
            <section className='block sm:hidden bg-gray-100 p-4 min-h-screen' id={id + "mobile"}>
                <h2 className='text-lg text-primary font-bold capitalize text-center'>
                    Projects & ideas <span className='text-borders'>I&apos;ve worked on.</span>
                </h2>

                <div className='bg-gray-200 rounded-xl border grid grid-cols-12 py-4 h-full w-full'>
                    <button onClick={previousProject} className={buttonClassesMobile}>
                        <IoIosArrowBack />
                    </button>
                    <div className='col-span-10'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-md font-bold pt-4'>{project.name}</h3>
                            {
                                project.image ?
                                    <Image src={project.image} alt={project.name} width={75} height={75} className='rounded-xl bg-transparent min-h-[75px]' />
                                    :
                                    project.icon
                            }
                        </div>
                        <div>
                            <div className='text-xs text-justify'>
                                <p className='pt-4'><span className='font-bold'>Project Objective:</span> {project.description}</p>
                                <p className='pt-4'><span className='font-bold'>My Role:</span> {project.role}</p>
                            </div>
                        </div>
                        <div className='flex space-x-4 pt-4'>
                            <a href={project.link} target='_blank' rel='noreferrer' className='bg-primary text-white px-6 py-3 rounded-xl w-full text-center'>
                                Visit Site
                            </a>
                        </div>

                    </div>
                    <button onClick={nextProject} className={buttonClassesMobile}>
                        <IoIosArrowForward />
                    </button>
                </div>

            </section>
        </>
    )
}

