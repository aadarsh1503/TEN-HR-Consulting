import React from "react";
import "./ApplyTalent.css";

const ApplyTalent = () => {
  return (
    <section>
      {/* Top Section */}
      <div className="apply-container">
        <div className="apply-content">
          <h3 className="apply-heading">Discover Your Next Opportunity</h3>
          <h1 className="apply-title">Join Our Talent Pool</h1>
          <p className="apply-description">
            Take the first step towards your dream job by submitting your CV.
            Our corporate partners are actively seeking talented individuals
            like you who are ready to make an impact in their careers.
          </p>
        </div>
      </div>

      {/* Upload CV Section */}
      <div className="upload-container">
        <h2 className="upload-title">How to Upload Your CV ?</h2>
        <div className="upload-steps">
          {/* Step 1 */}
          <div className="step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Complete Your Profile</h3>
              <p>
                Fill in all the required fields in the candidate form with
                accurate information to help us match you with suitable roles.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Upload Your CV</h3>
              <p>
                Attach your most up-to-date CV, ensuring it highlights your
                skills and experiences. For best results, submit it in PDF
                format.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Await Our Response</h3>
              <p>
                Your CV will be entered into our secure database. If a relevant
                opportunity arises, one of our recruitment specialists will
                reach out to you for a preliminary conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyTalent;
