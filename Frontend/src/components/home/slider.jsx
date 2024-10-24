import { useState, useEffect } from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";

const slider = [
  {
    image: "/src/assets/images/peo-eor.jpeg",
    title: "PEO & EOR",
    description:
      "Ten Hr consulting is a leading Professional Employer Organization (PEO), Recruitment, and HR consulting firm in Indonesia.",
    learnMoreLink: "http://localhost:5173/services/peo&eor",
  },
  {
    image: "/src/assets/images/recruitment.jpeg",
    title: "Recruitment",
    description:
      "We provide top-tier recruitment services to find the best talent for your business.",
    secondDescription:
      "Our approach is designed to match you with the right candidates.",
    learnMoreLink: "http://localhost:5173/services/recruitment",
  },
  {
    image: "/src/assets/images/hr-consulting.jpeg",
    title: "HR Consulting",
    description:
      "Our HR consulting services help you streamline your HR processes and improve employee engagement.",
    secondDescription: "We specialize in compliance and efficiency.",
    learnMoreLink: "http://localhost:5173/services/hrConsulting",
  },
  {
    image: "/src/assets/images/managed-services.jpeg",
    title: "Managed Services",
    description:
      "We offer comprehensive managed services to optimize your HR functions.",
    secondDescription: "Focus on your core business while we manage the rest.",
    learnMoreLink: "http://localhost:5173/services/managedServices", // Added link for managed services
  },
  {
    image: "/src/assets/images/payroll-procesing.jpeg",
    title: "Payroll Processing",
    description:
      "Let us handle your payroll processing to ensure accuracy and compliance.",
    secondDescription: "We ensure timely and precise payroll management.",
    learnMoreLink: "http://localhost:5173/services/payrollProcessing",
  },
];

function Slider() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  let imagesToShow = 3; // Number of images to show at a time
  if (window.innerWidth <= 700) {
    imagesToShow = 1;
  } else if (window.innerWidth <= 900) {
    imagesToShow = 2;
  }
  const totalSlides = slider.length;
  const slideInterval = 3000; // Auto-slide interval in milliseconds (3 seconds)

  // Function to create a loop where after the 5th image, the next slide shows 1st image again.
  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < imagesToShow; i++) {
      visibleSlides.push(slider[(currentIndex + i) % totalSlides]);
    }
    return visibleSlides;
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Move to the next image, wrap around
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides); // Move to the previous image, wrap around
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index); // Set current index based on dot click
  };

  return (
    <div className='slider-container h-auto'>
      {/* console.log(The width of the window is: ${width}px); */}
      <div className='slider-content'>
        {getVisibleSlides().map((item, index) => (
          <div
            className='slide'
            key={index}
            style={{ width: `${100 / imagesToShow}%` }} // Adjust width for each slide
          >
            <img src={item.image} alt={item.title} />
            {/* <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.secondDescription}</p> */}

            <h3>{t(item.title)}</h3>
            <p>{t(item.description)}</p>
            <p>{t(item.secondDescription)}</p>
            <button
              className='learn-more'
              onClick={() =>
                item.learnMoreLink && window.open(item.learnMoreLink, "_blank")
              }
            >
              {t("Learn More")} <span>→</span>
            </button>
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
