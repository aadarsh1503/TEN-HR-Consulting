import React from "react";
import "./PricingPayrollProcessing.css";
import Resources from "./Resources";

function PricingPayrollProcessing() {
  return (
    <>
      {" "}
      <div className="pricing-container">
        <div className="pricing-card-content">
          <h2>PRICING</h2>
          <h1>Reach out to us for a detailed quote for Payroll Processing</h1>

          <button className="contact-button">
            Schedule Now <span className="arrow">→</span>
          </button>
        </div>

        <div className="pricing-info">
          <p>
            Our Payroll Processing charges vary based on the volume of requests
            we are processing. The monthly cost per employee decreases as we
            process more volume.
            <br />
            <br />
            Here is some illustrative pricing, please contact us directly for a
            detailed quote:
          </p>

          <div className="pricing-tier">
            <h3>0-10 employees:</h3>
            <p>Starting at IDR 250,000</p>
            <h3>per employee per month</h3>
          </div>

          <div className="pricing-tier">
            <h3>50 - 100 employees:</h3>
            <p>Starting at IDR 150,000</p>
            <h3>per employee per month</h3>
          </div>

          <div className="pricing-tier">
            <h3>300+ employees:</h3>
            <p>Starting at IDR 75,000</p>
            <h3>per employee per month</h3>
          </div>
        </div>
      </div>
      {/* Resources Section */}
      <Resources />
    </>
  );
}

export default PricingPayrollProcessing;
