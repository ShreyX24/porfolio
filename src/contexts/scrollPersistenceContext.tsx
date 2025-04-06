// ScrollContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Define the context type
interface ScrollContextType {
  scrollPositions: Record<string, number>;
  saveScrollPosition: (path: string, position: number) => void;
  getScrollPosition: (path: string) => number;
}

// Create the context with default values
const ScrollContext = createContext<ScrollContextType>({
  scrollPositions: {},
  saveScrollPosition: () => {},
  getScrollPosition: () => 0,
});

// Custom hook to use the scroll context
export const useScrollContext = () => useContext(ScrollContext);

// Provider component
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});
  const location = useLocation();

  // Save scroll position for a specific path
  const saveScrollPosition = (path: string, position: number) => {
    setScrollPositions(prev => ({
      ...prev,
      [path]: position,
    }));
  };

  // Get scroll position for a specific path
  const getScrollPosition = (path: string) => {
    return scrollPositions[path] || 0;
  };

  // Save current scroll position when navigating away
  useEffect(() => {
    return () => {
      const currentPosition = window.scrollY;
      saveScrollPosition(location.pathname, currentPosition);
    };
  }, [location.pathname]);

  const contextValue: ScrollContextType = {
    scrollPositions,
    saveScrollPosition,
    getScrollPosition,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};