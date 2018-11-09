import { useState, useEffect, useRef } from 'react';

export const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const [lastRan, setLastRan] = useState(Date.now());
  const handler = useRef();

  useEffect(
    () => {
      handler.current = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          setThrottledValue(value);
          setLastRan(Date.now());
        }
      }, limit - (Date.now() - lastRan));

      return () => {
        clearTimeout(handler.current);
      };
    },
    [value, limit]
  );

  return throttledValue;
};
