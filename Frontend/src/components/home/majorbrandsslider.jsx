import { useState, useEffect } from "react";

// import "./slider.css";
import "./major.css";

const MajorBrandsSlider = [
  {
    image: "/src/assets/images/hanjin.jpeg",
  },
  {
    image: "/src/assets/images/rakamin-akademy.jpeg",
  },
  {
    image: "/src/assets/images/makerlab.jpeg",
  },
  {
    image: "/src/assets/images/pvn.jpeg",
  },
  {
    image: "/src/assets/images/xmh.jpeg",
  },
  {
    image: "/src/assets/images/Lamont-capital.jpeg",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(5); // Default to show 3 images

  const totalSlides = MajorBrandsSlider.length;
  const slideInterval = 3000; // Auto-slide interval (3 seconds)

  // Adjust the number of images shown based on screen width
  const handleResize = () => {
    if (window.innerWidth <= 700) {
      setImagesToShow(1);
    } else if (window.innerWidth <= 900) {
      setImagesToShow(3);
    } else {
      setImagesToShow(5);
    }
  };

  // Event listener for window resizing
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  // Function to get visible slides
  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < imagesToShow; i++) {
      visibleSlides.push(MajorBrandsSlider[(currentIndex + i) % totalSlides]);
    }
    return visibleSlides;
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index); // Set current index based on dot click
  };

  return (
    <div className='slider-container h-auto'>
      <div className='slider-content'>
        {getVisibleSlides().map((item, index) => (
          <div
            className='slide'
            key={index}
            style={{ width: `${100 / imagesToShow}%` }} // Adjust width for each slide
          >
            <img src={item.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className='prev' onClick={handlePrev}>
        ❮
      </button>
      <button className='next' onClick={handleNext}>
        ❯
      </button>

      <div className='dots-container'>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
