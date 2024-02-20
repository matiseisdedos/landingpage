import React from 'react'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import './globals.css'
import DynamicScrollButton from './components/ButtonScroll'

const sections = ['hero', 'about', 'techStack', 'projects'];

export default function Home() {
  return (
    <main>
      <Hero id="hero" />
      <About id="about" />
      <TechStack id="techStack" />
      <Projects id="projects" />
      <DynamicScrollButton sections={sections} />
    </main>
  )
}
