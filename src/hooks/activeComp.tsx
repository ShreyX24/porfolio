import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementTop = entry.boundingClientRect.top;
          const viewportHeight = window.innerHeight;

          // Check if the element is at least 50% of the viewport height from the top
          if (elementTop <= viewportHeight * 0.5) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", // Observe when 50% of the element is in view
      threshold: 0,
    };

    sectionIds.forEach((id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Add scroll event listener to update active section
    const handleScroll = () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (
            rect.top <= viewportHeight * 0.5 &&
            rect.bottom > viewportHeight * 0.5
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};
