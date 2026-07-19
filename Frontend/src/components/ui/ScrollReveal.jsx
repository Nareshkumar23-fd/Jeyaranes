import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, className = '', direction = 'up', delay = 0 }) => {
  const ref = useRef(null);

  const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${directionClass[direction] || 'reveal'} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
