import React, { useState } from 'react';
import banner from '../../assets/images/about1.png';
import missionImage from "../../assets/images/mission1.png";
import aboutRecruitindo from "../../assets/images/About Recruitindo.png";

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    company: '',
    inquiryReason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };

  const ScheduleForm = () => (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Schedule a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex space-x-2">
            <input
              type="text"
              name="countryCode"
              placeholder="Country Code"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-2/3 p-2 border rounded"
              required
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="inquiryReason"
            placeholder="Reason for Inquiry"
            value={formData.inquiryReason}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500"
          >
            Submit Enquiry
          </button>
        </form>
        <button
          className="absolute top-2 right-2 text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="px-4 md:px-6 lg:px-12">
        <div className="max-w-screen-2xl container mx-auto flex flex-col lg:flex-row lg:gap-12">
          <div className="order-1 w-full lg:w-1/2">
            <img
              src={banner}
              className="w-full h-auto pt-6 lg:pt-10 max-w-md mx-auto" // Reduced width for the about1.png image
              alt="About Us Banner"
            />
          </div>
          <div className="w-full order-2 lg:order-1 lg:w-1/2 mt-6 lg:mt-10">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-bold text-base lg:text-lg">ABOUT US</h3>
              <h1 className="text-2xl lg:text-4xl font-bold text-left">
                Empowering Businesses with Talent Solutions for India’s Growth
              </h1>
              <p className="text-base lg:text-lg">
              "At HR Consulting, we simplify business expansion in India by providing expert recruitment, PEO, and HR management services. Our team ensures compliance with local employment laws and connects you with skilled professionals, allowing you to concentrate on scaling your business effortlessly."
              </p>
              <button
                className="btn btn-warning text-black px-4 lg:px-8 py-2 rounded-md hover:text-white hover:bg-yellow-600 duration-300 cursor-pointer mt-4 lg:mt-6"
                onClick={() => setIsOpen(true)}
              >
                Schedule Now <span className="font-bold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 bg-blue-700 text-white p-6 sm:p-8 lg:p-10 rounded-lg">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
                <p className="text-sm sm:text-base">
                "At Recruitindo, our mission is to empower businesses and entrepreneurs from around the globe in setting up and growing their operations in India.
                </p>
                <p className="text-sm sm:text-base">
                  We believe that welcoming more entrepreneurs to India benefits the country’s economy, and we are committed to making this process seamless.
                </p>
                <p className="text-sm sm:text-base">
                Our focus is on streamlining the process of hiring local talent, ensuring a hassle-free experience that benefits both companies and the Indian job market.
                </p>
                <p className="text-sm sm:text-base">
                  Understanding India’s regulatory landscape can be challenging, and that's why we're here—to make it easier for you to navigate.
                </p>
                <p className="text-sm sm:text-base">
                By easing this process, we open doors to new opportunities and contribute to the success of your business in India.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
              <img
                src={missionImage}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Recruitindo Section */}
      <div className="px-4 md:px-6 lg:px-12 py-8 lg:py-16">
        <div className="max-w-screen-2xl container mx-auto flex flex-col lg:flex-row lg:gap-12">
          <div className="order-1 w-full lg:w-1/2">
            <img
              src={aboutRecruitindo}
              className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto" // Reduced width for the About Recruitindo.png image
              alt="Recruitindo platform overview"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center mt-6 lg:mt-0 lg:pl-6">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-bold text-base lg:text-lg">ABOUT RECRUITINDO</h3>
              <h1 className="text-2xl lg:text-3xl font-bold text-left">
                Our platform unlocks the potential of global teams
              </h1>
              <p className="text-base lg:text-lg">
              "Welcome to Recruitindo! We are your strategic partner for business growth in India. With a focus on Employer of Record (EOR) services, recruitment solutions, and HR consulting, we are dedicated to simplifying your entry and expansion into the Indian market. Our expertise helps businesses navigate the complexities of hiring and compliance, ensuring a smooth and successful journey."
              </p>
              <button
                className="btn btn-warning text-black px-4 lg:px-8 py-2 rounded-md hover:text-white hover:bg-yellow-600 duration-300 cursor-pointer mt-4 lg:mt-6"
                onClick={() => setIsOpen(true)}
              >
                Schedule Now <span className="font-bold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Include the schedule form component */}
      <ScheduleForm />
    </>
  );
}

export default AboutUs;
