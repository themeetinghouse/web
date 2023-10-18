import { useEffect, useState } from 'react';

export default function useHandleNavSize() {
  const [position, setPosition] = useState('unfix');
  useEffect(() => {
    const handleScroll = () => {
      const deviceWindow = document.getElementById('navbar');
      if (deviceWindow != null) {
        const deviceWindowHeight = window.outerHeight;
        if (
          window.scrollY <=
          deviceWindowHeight - (deviceWindowHeight / 100) * 20
        ) {
          setPosition('unfix');
        } else if (
          window.scrollY >
          deviceWindowHeight - (deviceWindowHeight / 100) * 20
        ) {
          setPosition('fix');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { position };
}
