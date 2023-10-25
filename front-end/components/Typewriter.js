import React, { useState, useEffect } from 'react';

function Typewriter({ text, delayTime=100 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, delayTime);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, currentIndex]);

  return <div>{displayText}</div>;
}

export default Typewriter;
