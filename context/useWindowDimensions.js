import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const w = (typeof window !== 'undefined' && window) || {width: 0};
  const { outerWidth: width } = w;
  return {
    width
  };

};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", () => console.log(window.innerWidth, window.outerWidth))
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}