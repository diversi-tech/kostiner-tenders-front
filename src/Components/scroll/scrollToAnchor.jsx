import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

<<<<<<< Updated upstream:src/Components/scrollToAnchor.jsx
const ScrollToAnchor = ({ component, anchorId, offset = 150 }) => {
=======
const ScrollToAnchor = ({ component, anchorId }) => {
>>>>>>> Stashed changes:src/Components/scroll/scrollToAnchor.jsx
  useEffect(() => {
    const element = document.getElementById(anchorId);
    if (element) {
      const yOffset = window.innerWidth < 768 ? -200 : -115; // Adjust offset based on screen size
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [anchorId]);
console.log("scroll");
  return (
    <Container fluid className="d-flex flex-column vh-100 w-100">
      <div id={anchorId}></div>
      {component}
    </Container>
  );
};

export default ScrollToAnchor;
