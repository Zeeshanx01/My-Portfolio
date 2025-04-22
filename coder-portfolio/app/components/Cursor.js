'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [windowWidth, setWindowWidth] = useState(1920);
  const scale = useTransform(cursorX, [-100, windowWidth], [0.8, 1.2]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };

    // Handle device detection
    const handleDeviceChange = () => {
      const touchDevice = checkTouchDevice() || window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(touchDevice);
      
      // Disable custom cursor for touch devices
      if (touchDevice) {
        document.body.style.cursor = 'auto';
        return;
      }
    };

    // Initial check
    handleDeviceChange();
    
    // Add resize listener for orientation changes
    window.addEventListener('resize', handleDeviceChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleDeviceChange);
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    let isMounted = true;
    const moveCursor = (e) => {
      if (isMounted) {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isMounted = false;
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

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