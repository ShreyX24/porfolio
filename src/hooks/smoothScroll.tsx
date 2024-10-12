import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};