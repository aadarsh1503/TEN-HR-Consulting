import React from "react";
import "./PeoEor.css";
import peoMainImage from "../../../assets/images/peo-main-image.jpg";
import { peoSolutions } from "../../../assets/data/peoSolution";
import { peoBenefits } from "../../../assets/data/peoBenefit";
import { peoPricing } from "../../../assets/data/peoPricing";
import rightArrow from "../../../assets/images/right-arrow.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ServicesPEO1 from "../../../assets/images/ServicesPEO1.jpg";
import ServicesPEO2 from "../../../assets/images/ServicesPEO2.jpg";
import ServicesPEO3 from "../../../assets/images/ServicesPEO3.jpg";

function PeoEor() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const contactUsPage = () => {
    navigate("/contactUs");
  };

  const resourcesPage = () => {
    navigate("/resources");
  };

  const peoResources = [
    {
      id: 0,
      img: ServicesPEO1,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "The Complete Handbook of Executive Search in India: Examining the Economic and Cultural Effects of Poor Hiring"
      ),
      text: t(
        "Overview Finding and keeping top executive talent is essential for the competitive corporate environment of today."
      ),
    },
    {
      id: 1,
      img: ServicesPEO2,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "Using PEO/EOR Services to Manage Remote Teams in India: Crucial Tools and Strategies"
      ),
      text: t(
        "Overview In the era of digital change and globalization, the capacity to efficiently lead remote teams."
      ),
    },
    {
      id: 2,
      img: ServicesPEO3,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "Strategic Executive Search Services for Leading Companies in India"
      ),
      text: t(
        "Finding the proper people to run your company in the highly competitive business world of today is more."
      ),
    },
  ];

  return (
    <div className="peo-container">
      {/* Main Section */}
      <div className="peo-main">
        <div className="peo-main-image">
          <img src={peoMainImage} alt="Peo & Eor main image" />
        </div>
        <div className="peo-main-contant">
          <h2>{t("PEO & EOR")}</h2>
          <h1>{t("Engage Workforce in India Without Company Registration")}</h1>
          <p>
            {t(
              "Skip the complexities of launching your own business just to hire local talent. With our PEO solution, you can begin immediately!"
            )}
          </p>
          <button className="peo-main-btn" onClick={contactUsPage}>
            {t("Let’s Talk")}
          </button>
        </div>
      </div>

      {/* Solution Section */}
      <div className="peo-solution">
        <h2>{t("PEO & EOR")}</h2>
        <h1>{t(`Advantages of Choosing Recruitindo's PEO/EOR Solutions`)}</h1>
        <div className="peo-solution-cards">
          {peoSolutions.map((data) => (
            <div key={data.id} className="peo-solution-card">
              <img src={data.image} alt="" />
              <h2>{t(data.name)}</h2>
              <p>{t(data.desc)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="peo-benefit">
        <h2>{t("PEO & EOR")}</h2>
        <h1>{t(`Benefits of Using Recruitindo's PEO / EOR Service`)}</h1>
        <div className="peo-benefit-cards">
          {peoBenefits.map((data) => (
            <div key={data.id} className="peo-benefit-card">
              {data.id != peoBenefits.length ? (
                <>
                  <img src={data.image} alt="" />

                  <h2>{t(data.name)}</h2>
                  <p>{t(data.desc)}</p>
                </>
              ) : (
                <>
                  <div className="peo-benefit-unique">
                    <h2>{t(data.name)}</h2>
                    <p>{t(data.desc)}</p>
                    <img
                      onClick={contactUsPage}
                      src={rightArrow}
                      alt="Right Arrow image"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing PEO EOR */}
      <div className="peo-pricing">
        <h2>{t("PRICING")}</h2>
        <h1>{t("PEO / EOR Price Sheet")}</h1>
        <div className="peo-pricing-cards">
          {peoPricing.map((data) => (
            <div key={data.id} className="peo-pricing-card">
              <h3>{t(data.name)}</h3>
              <div className="peo-pricing-card-price">
                <h5>{t("Starting from")}</h5>
                <h3>{data.price}</h3>
                <h5>{t("per employee per month")}</h5>
              </div>
              <hr />
              <h4>{t("Includes")}</h4>
              <ul>
                {data.include.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
              <button className="peo-pricing-btn" onClick={contactUsPage}>
                {t("Let’s Talk")}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="peo-resources">
        <h2>{t("Resources")}</h2>
        <h1>{t("Resources and Articles")}</h1>
        <div className="peo-resource-cards">
          {peoResources.map((ele, index) => (
            <>
              <div key={index} className="peo-resource-card">
                <img src={ele.img} alt="" />
                <div className="peo-resource-card-btn">
                  <button className="peo-resource-article-btn">
                    {" "}
                    {ele.article}{" "}
                  </button>
                  {ele.resources === " " ? (
                    " "
                  ) : (
                    <>
                      ,{" "}
                      <button className="peo-resources-btn">
                        {ele.resources}
                      </button>
                    </>
                  )}
                </div>
                <div className="peo-resource-card-text">
                  <h4>{ele.title} </h4>
                  <p> {ele.text}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <button className="peoResource-btn" onClick={resourcesPage}>
          {t("Our Resources")}
        </button>
      </div>
    </div>
  );
}

export default PeoEor;
