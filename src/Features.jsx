import React, { useState } from 'react';
import Calculator from './Calculator';
import './Features.css';

const Features = () => {
  // State to manage visibility of the image list
  const [showMore, setShowMore] = useState(false);

  // Toggle the state when the button is clicked
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="features" className="app-section">
      <div className="section-content">
        <h1>Features</h1>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-info">
              <h2>Calculator</h2>
              <Calculator />
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-info">
              <p>Explore my creative projects and mini tools like the calculator.</p>
              <button className="features-button" onClick={toggleShowMore}>
                {showMore ? 'Show Less' : 'See More'}
              </button>
            </div>
          </div>
        </div>

        {/* Conditionally render the list of images based on state */}
        {showMore && (
          <div className="image-gallery">
            <h3>Image Gallery</h3>
            <div className="image-list">
              <img src="https://via.placeholder.com/150" alt="Example 1" />
              <img src="https://via.placeholder.com/150" alt="Example 2" />
              <img src="https://via.placeholder.com/150" alt="Example 3" />
              <img src="https://via.placeholder.com/150" alt="Example 4" />
              {/* Add more images as needed */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
