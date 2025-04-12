'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useTransform(cursorX, [-100, window.innerWidth], [0.8, 1.2]);
  const [isVisible, setIsVisible] = useState(true); // Start as visible

  useEffect(() => {
    let isMounted = true;

    const moveCursor = (e) => {
      if (isMounted) {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.style.cursor = 'none'; // Hide default cursor
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto'; // Restore default cursor
    };

    // Initialize visibility based on mouse presence
    if (document.body) {
      setIsVisible(document.body.matches(':hover'));
    }

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isMounted = false;
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto'; // Cleanup
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        scale,
        pointerEvents: 'none',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'rgba(125, 60, 255, 0.5)',
        border: '2px solid #7D3CFF',
        boxShadow: '0 0 20px #7D3CFF, 0 0 40px #7D3CFF',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
      whileHover={{
        scale: 1.5,
        backgroundColor: 'rgba(125, 60, 255, 0.8)',
        boxShadow: '0 0 30px #7D3CFF, 0 0 60px #7D3CFF',
      }}
    />
  );
};

export default Cursor;