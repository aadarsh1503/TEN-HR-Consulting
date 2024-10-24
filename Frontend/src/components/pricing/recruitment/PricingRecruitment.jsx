import React from "react";
import "./PricingRecruitment.css";
import { useNavigate } from "react-router-dom";

const PricingRecruitment = () => {
  const navigate = useNavigate();

  const handleUploadCVClick = () => {
    navigate("/applyTalent");
  };

  const handleMoreResourcesClick = () => {
    navigate("/resources");
  };

  return (
    <section>
      {/* Recruitment  Pricing Section */}

      <div className="pricing-recruitment-container">
        <div className="pricing-recruitment-content">
          <h3 className="pricing-recruitment">PRICING</h3>
          <h2 className="pricing-recruitment-title">
            Transparent Recruitment Services Pricing
          </h2>
          <p className="pricing-recruitment-description">
            Our pricing structure is designed to provide value, charging between
            15-20% of the annual compensation, which includes bonuses and
            incentives (excluding ESOP). This ensures you only pay for the
            quality talent we deliver.
          </p>
          <div className="button">
            <button className="pricing-recruitment-get-started-button">
              Get Started
            </button>
            <button
              className="pricing-recruitment-upload-cv-button"
              onClick={handleUploadCVClick}
            >
              Upload CV
            </button>
          </div>
        </div>
        <div className="pricing-recruitment-details">
          <h3>Comprehensive Recruitment Services Included in Our Package:</h3>
          <ul>
            <li>Candidate Screening</li>
            <li>CV Refinement</li>
            <li>Background Verification</li>
            <li>Ongoing Recruiter Support</li>
          </ul>
          <p className="pricing-recruitment-annual-compensation-note">
            1) The annual compensation package encompasses the 13-month THR
            (Religious Festive Allowance), ensuring a comprehensive financial
            benefit for employees.
          </p>
          <p className="pricing-recruitment-annual-compensation-note">
            2) Our goal is to simplify your recruitment process, offering
            clarity and confidence in our pricing structure while delivering
            exceptional talent solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="resources-articles-section">
        <h3 className="resources-heading">Resources</h3>
        <h2 className="resources-title">Resources & Articles</h2>
        <div className="articles-container">
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/financial-benefits-1024x688.jpeg"
              alt="PEO/EOR Guide"
              className="article-image"
            />
            <h3 className="article-title">
              Unlocking the Benefits of PEO/EOR Services for Businesses in
              Indonesia
            </h3>
            <p className="article-description">
              Discover how PEO/EOR services can streamline operations and save
              costs for businesses expanding in Indonesia.
            </p>
          </div>
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/Peo-tech-company-1024x683.jpeg"
              alt="Tech Expansion"
              className="article-image"
            />
            <h3 className="article-title">
              Tech Expansion to Indonesia: Key Strategies for Success
            </h3>
            <p className="article-description">
              Learn how tech companies can leverage local talent and resources
              to successfully enter the Indonesian market.
            </p>
          </div>
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/peo-provider-1024x683.jpeg"
              alt="Choosing a PEO"
              className="article-image"
            />
            <h3 className="article-title">
              How to Select the Right PEO Provider for Your Business in
              Indonesia
            </h3>
            <p className="article-description">
              Get tips on selecting a PEO provider that aligns with your
              business goals and ensures compliance with local regulations.
            </p>
          </div>
        </div>
        <div className="more-resources-button-container">
          <button
            className="more-resources-button"
            onClick={handleMoreResourcesClick}
          >
            More Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingRecruitment;
