import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start 
    justify-between max-w-7xl mx-auto z-20 
    xl:items-center'>
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://instagram.com/jaketrent" fgColor='gray' bgColor='
            transparent'/>

            <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='
            transparent'/>

            <SocialIcon url="https://github.com/jaketrent" fgColor='gray' bgColor='
            transparent'/>

            <SocialIcon url="https://facebook.com/jaketrent" fgColor='gray' bgColor='
            transparent'/>
        </motion.div>

        <Link href='#contact'>
          <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className='flex items-center text-gray-300 cursor-pointer'>

              <SocialIcon 
              network='email' 
              fgColor='gray' 
              bgColor='transparent' />
              <p className='hidden uppercase 
              md:inline-flex text-sm text-gray-400'>
                  Get in Touch
                  </p>
        </motion.div>
        </Link>
    </header>
  )
}

export default Header