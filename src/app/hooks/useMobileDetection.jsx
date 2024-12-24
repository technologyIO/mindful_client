import { useState, useEffect } from 'react';

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);  // Mobile check (you can adjust the width threshold)
      };

      checkIfMobile();  // Check on mount
      window.addEventListener('resize', checkIfMobile);  // Update on resize

      return () => {
        window.removeEventListener('resize', checkIfMobile);  // Clean up event listener
      };
    }
  }, []);  // Run only once when the component is mounted

  return isMobile;
};

export default useMobileDetection;
