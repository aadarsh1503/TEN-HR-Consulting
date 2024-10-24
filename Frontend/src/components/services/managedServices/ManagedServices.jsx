import React from "react";
import "./ManagedServices.css";

function ManagedServices() {
  return (
    <div className="App">
      {/* Section 1 */}
      <section className="section section-hero">
        <div className="text-container">
          <h4>MANAGED SERVICES</h4>
          <h1>End to End Recruiting, Admin, Payroll, and HR Management</h1>
          <p>
            Through our managed services solution, we will recruit, hire, and
            manage all HR-related admin for your employees in Indonesia. All you
            need to do is manage the teams.
          </p>
          <button className="btn-primary">Schedule Now</button>
        </div>
        <div className="image-container">
          <img src="https://recruitindo.com/wp-content/uploads/2023/12/managed-services.png" alt="service illustration" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section-phases">
        <h2>We build teams to achieve your target outcomes</h2>
        <div className="phases-container">
          <div className="phase">
            <h3>Planning Phase</h3>
            <h4>Scoping</h4>
            <p>
              We spend time with you to understand your specific goals, how long
              you need to keep the team for, and your budget.
            </p>
          </div>
          <div className="phase">
            <h3>Execution Phase</h3>
            <h4>Team Formation</h4>
            <p>
              We recruit the team you need to fulfill your goals and manage all
              the admin.
            </p>
          </div>
          <div className="phase">
            <h3>Maintenance Phase</h3>
            <h4>Team Monitoring</h4>
            <p>
              We will monitor the team and help manage all HR-related matters.
            </p>
          </div>
        </div>
      </section>

{/* Section 3 */}
<section className="quote-section">
      <div className="quote-content">
        <h2 className="quote-title">Reach out for a quote for Managed Services</h2>
        <p className="quote-description">
          We need to deeply understand what you are trying to accomplish before sharing pricing.
          Please reach out to us to schedule time to connect, so we can better understand your needs.
          Once we have been able to scope your project, we will issue pricing within 48 hours.
        </p>
        <button className="quote-btn">Schedule Now →</button>
      </div>
</section>
{/* Section 3 End */}

      {/* Section 4 */}
      <section className="section section-pricing">
        <div className="pricing-left">
          <h3>Reach out for a quote for Managed Services</h3>
          <button className="btn-primary">Schedule Now</button>
        </div>
        <div className="pricing-right">
          <p>
            We need to deeply understand what you are trying to accomplish before
            sharing pricing. Reach out to us for more information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ManagedServices;
