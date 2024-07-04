import React, { useEffect } from 'react';

const ScrollToAnchor = ({ component, anchorId, offset = 150 }) => {
  useEffect(() => {
    const element = document.getElementById(anchorId);
    if (element) {
      const yOffset = -offset;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [anchorId, offset]);

  return (
    <>
      <div id={anchorId}></div>
      {component}
    </>
  );
};

export default ScrollToAnchor;
