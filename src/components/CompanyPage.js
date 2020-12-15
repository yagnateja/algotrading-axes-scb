import React, { Fragment, useState } from "react";
import StockChart from "../components/StockChart";
import NewsContainer from "../components/NewsContainer";
import "../styles.css";

import SearchDialog from "../components/SearchDialog";

const CompanyPage = (props) => {
  const newsContainerStyles = {
    overflowY: "scroll",
    height: "500px",
    width: "800px",
    border: "thin solid green",
  };

  const stockChartContainerStyle = {
    height: "500px",
    width: "800px",
    border: "thin solid green",
  };

  const [selectedCompany, setSelectedCompany] = useState();
  const [open, setOpen] = React.useState(true);

  const buy = true;

  const buyText = <span style={{ color: "green" }}>Buy</span>;
  const sellText = <h4 style={{ color: "red" }}>Sell</h4>;

  return (
    <Fragment>
      <SearchDialog
        open={open}
        setOpen={setOpen}
        setCompany={setSelectedCompany}
      />
      {selectedCompany ? (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center my-5">
          <div className="container-fluid d-flex flex-row justify-content-right align-items-center my-5">
            <div className="col-5" />
            <h3>
              Stock Sentiment of{" "}
              <span style={{ color: "orange" }}>
                {" "}
                {selectedCompany.company}
              </span>
            </h3>
            <div className="col-2" />

            <button
              className="btn-lg btn-primary ml-5"
              onClick={() => {
                setSelectedCompany();
                setOpen(true);
              }}
            >
              Change Company
            </button>
          </div>

          <div className="container-fluid d-flex flex-wrap flex-row justify-content-around align-items-center">
            <div
              className="card d-flex justify-content-center align-items-center m-5"
              style={stockChartContainerStyle}
            >
              <StockChart company={selectedCompany} />
            </div>

            <div
              className="card"
              style={newsContainerStyles}
              id="newsContainer"
            >
              <NewsContainer company={selectedCompany} />
            </div>
          </div>
          <div className="mt-5">
            <h3>Suggestion: {buy ? buyText : sellText}</h3>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Fragment>
  );
};

export default CompanyPage;
