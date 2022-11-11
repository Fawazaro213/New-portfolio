import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo,
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial ={{
        opacity: 0
    }}
    whileInView ={{
        opacity: 1
    }}
    transition ={{
        duration: 1.5
    }}
     className='flex flex-col h-screen
    text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center
    md:relative lg-relative'>
        <h3 className='md:absolute md:top-24 
        lg:absolute lg:top-24
        uppercase tracking-[20px]
        text-gray-500 text-2xl'>About</h3>
    
        <motion.img 
        initial = {{
            x: -200,
            opacity: 0
        }}
        transition = {{
            duration: 1.2
        }}
        whileInView = {{
            x: 0,
            opacity: 1
        }}
        viewport = {{
            once: true
        }}
        className='rounded-full md:md-0
        flex-shrink-0 w-56 h-56 object-cover
        md:rounded-lg md:w-64 md:h-64 lg:w-[400px] 
        lg:h-[400px]' 
        src={urlFor(pageInfo?.profilePic).url()} alt="My profile" />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a{" "}
            <span 
            className='underline decoration-[#2d858b]'>little</span>{" "} background</h4>
            <p className='text-base'>
                {pageInfo?.backgroundInformation}
            </p>
            <a href='\static\fawaz-resume.pdf' target='_blank' className='text-sm uppercase text-[#2d858b]
            pb-2 tracking-[5px]'>View resume</a>
        </div>
    </motion.div>
  )
}

export default About