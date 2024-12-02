import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveSection(index + 1);
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}