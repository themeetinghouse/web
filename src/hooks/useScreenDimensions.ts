import { useEffect, useState } from 'react';

const useScreenDimensions = () => {
  const [screenWidth, setScreenWidth] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleScreenSizeChange = () => {
      setScreenWidth({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleScreenSizeChange);
    return () => {
      window.removeEventListener('resize', handleScreenSizeChange);
    };
  }, []);
  return { width: screenWidth.width, height: screenWidth.height };
};

export default useScreenDimensions;
