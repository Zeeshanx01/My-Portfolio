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
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

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
        document.body.classList.remove('custom-cursor-active');
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
      document.body.classList.remove('custom-cursor-active');
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
      document.body.classList.add('custom-cursor-active');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
      document.body.classList.remove('custom-cursor-active');
    };

    // Detect clickable elements with better logic
    const handleMouseOver = (e) => {
      const target = e.target;

      // Check if the element or any of its parents is clickable
      const isClickable = target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.onclick ||
        target.style.cursor === 'pointer' ||
        getComputedStyle(target).cursor === 'pointer' ||
        target.role === 'button' ||
        target.tabIndex >= 0 ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.closest('[onclick]') ||
        target.closest('[role="button"]');

      setIsHoveringClickable(!!isClickable);
    };

    const handleMouseOut = (e) => {
      // Only set to false if we're not hovering over any clickable element
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget ||
        (!relatedTarget.closest('button') &&
          !relatedTarget.closest('a') &&
          !relatedTarget.closest('.cursor-pointer') &&
          !relatedTarget.closest('[onclick]') &&
          !relatedTarget.closest('[role="button"]'))) {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      isMounted = false;
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
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
        scale: isHoveringClickable ? 1.5 : scale,
        pointerEvents: 'none',
        width: isHoveringClickable ? '25px' : '20px',
        height: isHoveringClickable ? '25px' : '20px',
        borderRadius: isHoveringClickable ? '8px' : '50%',
        backgroundColor: isHoveringClickable
          ? 'rgba(125, 60, 255, 0.9)'
          : 'rgba(125, 60, 255, 0.5)',
        border: '2px solid #7D3CFF',
        boxShadow: isHoveringClickable
          ? '0 0 30px #7D3CFF, 0 0 60px #7D3CFF'
          : '0 0 20px #7D3CFF, 0 0 40px #7D3CFF',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
      animate={{
        scale: isHoveringClickable ? 1.5 : 1,
        borderRadius: isHoveringClickable ? '8px' : '50%',
        width: isHoveringClickable ? '25px' : '20px',
        height: isHoveringClickable ? '25px' : '20px',
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut"
      }}
    />
  );
};

export default Cursor;