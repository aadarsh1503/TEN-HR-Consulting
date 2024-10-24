import React from "react";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`} onClick={onToggle} role="button" tabIndex="0">
      <div className="faq-question">
        {faq.question}
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
