import type { NextPage } from 'next'
import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white 
    h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Fawaz Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Expirience */}
      <section id='experiance' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
          <ContactMe />
      </section>

      {/* Footer */}
      {/* <Link href="#hero">
        <footer className='sticky bottom w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer'
          src="/static/profile.jpg" alt="" />
          </div>
        </footer>
      </Link> */}

    </div>
  )
}

export default Home
