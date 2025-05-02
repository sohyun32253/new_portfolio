// Container.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Container.css';

const Container = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 한 번만 관찰
        }
      },
      { threshold: 0.2 } // 20% 정도 보이면 작동
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`section-container ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default Container;
