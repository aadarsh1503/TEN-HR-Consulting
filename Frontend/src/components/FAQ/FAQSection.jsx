import React, { useState } from 'react';
import './FAQSection.css'; 

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: "How can I get in touch with TEN HR Consulting for more information?",
      answer: "You can contact us through our website, via email, or by phone. Our team is ready to provide you with more information and answer any further questions you might have about our services.",
    },
    {
      id: 2,
      question: "What are the fees for your services?",
      answer: "Our fees vary based on the scope and complexity of your requirements. Please contact us for a detailed quote.",
    },
    {
      id: 3,
      question: "Can HR Consulting assist with employee training and development?",
      answer: "Yes, we offer various training and development programs to enhance the skills and competencies of your employees, tailored to your specific business requirements.",
    },
    {
      id: 4,
      question: "Does HR Consulting offer any guarantees with its services?",
      answer: "While specific guarantees depend on the service, we strive for excellence and client satisfaction in all our engagements. We are committed to delivering quality results and solutions that meet your business needs.",
    },
    {
      id: 5,
      question: "How does TEN HR Consulting handle confidential information?",
      answer: "We adhere to strict confidentiality protocols to protect sensitive information about your business and employees. Client privacy and data security are top priorities for us.",
    },
    {
      id: 6,
      question: "How can I get started with your PEO/EOR services?",
      answer: "Contact us through our website or reach out to our support team for a consultation. We’ll guide you through the process and tailor our services to meet your specific business needs.",
    },
    {
      id: 7,
      question: "What kind of support can I expect from TEN HR Consulting throughout the expansion process?",
      answer: "We provide end-to-end support, from initial consultation to ongoing management of employment and legal compliance, ensuring a seamless expansion experience.",
    },
    {
      id: 8,
      question: "Can TEN HR Consulting help with hiring local talent?",
      answer: "Yes, we assist in recruiting and managing local talent, ensuring that your workforce meets the necessary qualifications and complies with local employment laws.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Common questions</h2>
      <p className="faq-subtitle">Frequently Asked Questions</p>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;
