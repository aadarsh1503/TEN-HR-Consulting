import React from "react";
import { ConsultingPrice } from "../../../assets/data/ConsultingPrice";
import "./HrConsulting.css";

function PricingHrConsulting() {
  return (
    <div className="Main">
      <div className="upperPart">
        <h2>PRICING</h2>
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
  );
}

export default PricingHrConsulting;
