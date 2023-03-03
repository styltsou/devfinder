import { useLayoutEffect } from 'react';

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
};

export default useLockBodyScroll;
