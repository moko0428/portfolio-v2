'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Profile from '../sections/intro/Profile';

const Splash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 1, delay: 4.5 }}
      >
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ x: -700, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                type: 'spring',
                duration: 2,
                delay: 1,
              }}
              className="mr-80 mb-72 text-7xl font-black italic tracking-widest text-[#05233F]"
            >
              <span className="drop-shadow-[0_4px_4px_rgba(1,2,2,0.25)]">
                MOKO
              </span>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 700 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: 'easeInOut',
                type: 'spring',
                duration: 2,
                delay: 1,
              }}
              className="ml-80 mt-96 text-7xl font-black italic tracking-widest text-[#05233F]"
            >
              <span className="drop-shadow-[0_4px_4px_rgba(1,2,2,0.25)]">
                PORTFOLIO
              </span>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          <motion.div
            initial={{ scale: 4, opacity: 0, rotate: 20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2.2,
              delay: 2.5,
            }}
            className="flex h-full w-full items-center justify-center"
          >
            <Profile />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Splash;
