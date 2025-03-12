import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

interface AnimatedHeaderProps {
  children: React.ReactNode;
}

export const AnimatedHeader = ({ children }: AnimatedHeaderProps) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed h-[80px] w-full max-w-[1400px] p-[20px] flex flex-row  items-center Logo transition-colors duration-300 backdrop-blur bg-white/50 z-50
        ${isScrolled ? '' : 'bg-white/50'}`}
    >
      {children}
    </motion.header>
  );
};
