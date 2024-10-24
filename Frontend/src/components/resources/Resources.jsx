import "./Resources.css";
import { cardLists } from "../../assets/data/cardLists";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardLists.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(cardLists.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className="resource-header">
        <h1>{t("Resources")}</h1>
        <p>
          {t("Learn more about employment, best practices in HR, and")} <br />
          {t("relevant laws and regulations for HR in India")}
        </p>
      </section>

      <section className="resource-section">
        <div className="resource-card-section">
          {currentCards.map((ele, index) => (
            <div key={index} className="resource-card">
              <img src={ele.img} alt="" />
              <div className="card-btn">
                <button className="article-btn"> {t(ele.article)} </button>
                {ele.resources === " " ? (
                  " "
                ) : (
                  <>
                    ,
                    <button className="resources-btn">
                      {t(ele.resources)}
                    </button>
                  </>
                )}
              </div>
              <div className="card-text">
                <h4>{t(ele.title)} </h4>
                <p> {t(ele.text)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pages">
          {currentPage > 1 && (
            <button className="page-btn" onClick={handlePrevious}>
              Prev
            </button>
          )}

          <button className="page-btn" onClick={() => handlePageChange(1)}>
            1
          </button>
          <button className="page-btn" onClick={() => handlePageChange(2)}>
            2
          </button>
          <button className="page-btn" onClick={() => handlePageChange(3)}>
            3
          </button>

          {currentPage < Math.ceil(cardLists.length / cardsPerPage) && (
            <button className="page-btn" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
