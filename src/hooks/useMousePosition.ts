import { useState, useEffect } from 'react';

const useMousePosition = (includeScroll: boolean = false) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
      const scrollX = includeScroll ? window.scrollX : 0;
      const scrollY = includeScroll ? window.scrollY : 0;
      setPosition({ x: event.clientX + scrollX, y: event.clientY + scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [includeScroll]); 

  return position;
};

export default useMousePosition;
