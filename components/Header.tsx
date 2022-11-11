import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';

type Props = {
  socials: Social[]
};

function Header({ socials }: Props) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
      setHasMounted(true);
  }, []);
  if (!hasMounted) {
      return null;
  }

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
            {socials.map((social) => (
              <SocialIcon
              key={social._id}
              url={social.url}
               fgColor='gray' bgColor='
              transparent'/>
            ))}
        </motion.div>

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
              {/* <SocialIcon url='http://localhost:3000/#contact' network='email' fgColor='gray' bgColor='transparent' /> */}
              <Link href='#contact'> 
                <p className='hidden uppercase 
                md:inline-flex text-sm text-gray-400'>
                    Get in Touch
                    </p>
          </Link>
          </motion.div>

    </header>
  )
}

export default Header