import React from "react";
import { bodyList } from "../../../assets/data/bodyList";

import { ConsultingPrice } from "../../../assets/data/ConsultingPrice";
import "./HrConsulting.css";
// import CheckTick from "./src/assets/images/CheckTick.svg"
import rightArrow from "../../../assets/images/right-arrow.svg";

function HrConsulting() {
  return (
    // HR CONSULTING

    <div className="Body">
      <div className="firstPart">
        <div className="left">
          <img
            src="https://recruitindo.com/wp-content/uploads/2023/12/hr-consulting-services-hero.png"
            alt=""
          />
        </div>

        <div className="right">
          <h3>HR CONSULTING</h3>
          <h1>HR Consulting for Statutory Compliance</h1>
          <p>
            Our HR consulting business is focused on ensuring statutory
            compliance for your operations in Indonesia. We ensure our clients
            are 100% compliant from an HR perspective.
          </p>

          <button>Schedule Now</button>
        </div>
      </div>

      {/* // LIST OF SERVICES */}
      <div className="secondPart">
        <div className="threeLine">
          <h2>HR CONSULTING</h2>
          <h1>Our Offering</h1>
          <h3>List of Services</h3>
        </div>

        <div className="card-container">
          {bodyList.map((data) => (
            <div key={data.id} className="card">
              {data.id != bodyList.length ? (
                <>
                  <div className="logo-container">
                    <img src={data.image} alt="" />
                  </div>
                  <h1>{data.heading}</h1>
                  <p>{data.content}</p>
                </>
              ) : (
                <>
                  <div className="uniqueCard">
                    <h1>{data.heading}</h1>
                    <p>{data.content}</p>
                    <img src={rightArrow} alt="Right Arrow" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* // HR SERVICES FOR BUSINESS */}
      <div className="thirdPart">
        <div className="leftThird">
          <h1>One-stop HR Service For Your Business</h1>
          <p>
            Recruitindo now assists you in providing HR Management services
            starting from PEO services. Our fees are competitively priced,
            saving you money compared to other service providers. We don’t just
            offer company incorporation HR services; we are your business
            partner.
          </p>

          <div className="points">
            <div className="leftPoint">
              <ul>
                <li>Regulatory and Tax Compliance</li>
                <li>Work Permits</li>
                <li>Payroll Processing</li>
              </ul>
            </div>

            <div className="rightPoint">
              <ul>
                <li> Talent recruitment</li>
                <li>Employee onboarding and off-boarding</li>
                <li>HR Consulting Services / Ad-hoc HR Services</li>
              </ul>
            </div>
          </div>
          <button>Schedule Now</button>
        </div>

        <div className="rightThird">
          <div className="thirdImg">
            <img
              src="https://recruitindo.com/wp-content/uploads/2023/12/one-stop-hr-services-for-your-business.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* >HR Consulting Price Sheet */}
      <div className="fourthPart">
        <div className="upperText">
          <h3>PRICING</h3>
          <h1>HR Consulting Price Sheet</h1>
        </div>

        <div className="priceSheet">
          {ConsultingPrice.map((data, index) => {
            return (
              <div key={index} className="priceCard">
                <h1>{data.heading}</h1>
                <div className="innerDiv">
                  <h1>{data.Amount}</h1>
                  <h3>{data.Count}</h3>
                </div>
                <hr />
                <h2>{data.Subheading}</h2>
                <ul>
                  {Array.isArray(data.List) ? (
                    data.List.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <li>No items available</li>
                  )}
                </ul>

                <button>Get Started</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HrConsulting;
