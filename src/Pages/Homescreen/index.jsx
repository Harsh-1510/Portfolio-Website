import React from 'react'
import HeroSection from '../HeroSection'
import About from '../About'
import Skills from '../Experience'
import Projects from '../Projects'
import Contact from '../Contact'
import Footer from '../Footer'

export default function Home(){
  return (
    <>
        <HeroSection/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}
