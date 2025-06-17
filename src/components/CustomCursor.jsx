import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const updateCursor = () => {
      // Smoothly ease toward mouse position
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      // Apply transform with centering
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.getAttribute('data-cursor-hover')
      ) {
        setIsHovering(true);
      }
    };
    

    const handleMouseOut = (e) => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-gray-50 rounded-full z-[9999] pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none rounded-full transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out border-[2px] border-[#00ff95] shadow-[0_0_12px_4px_rgba(0,255,149,0.5)]
          ${isHovering ? 'w-20 h-20' : 'w-12 h-12'}
        `}
      />
    </>
  );
};

export default Cursor;
