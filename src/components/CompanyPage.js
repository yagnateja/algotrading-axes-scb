import React, { Fragment, useState } from "react";
import StockChart from "../components/StockChart";
import NewsContainer from "../components/NewsContainer";
import companySymbols from "../data/company_symbols.json";

let selectedCompany = {};

const CompanyPage = (props) => {
  const newsContainerStyles = {
    overflowY: "scroll",
    height: "500px",
    width: "800px",
  };
  companySymbols.forEach((company) => {
    if (company.id == props.match.params.companyId) {
      selectedCompany = company;
    }
  });

  if (selectedCompany) {
    const companySymbol = selectedCompany.symbol;
    const companyTitle = selectedCompany.company;
  }

  const buy = true;

  const buyText = <h4 style={{ color: "green" }}>Buy</h4>;
  const sellText = <h4 style={{ color: "red" }}>Sell</h4>;

  return (
    <Fragment>
      {selectedCompany ? (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center my-5">
          <div>
            <h3>Stock sentiment</h3>
          </div>

          <div className="container-fluid d-flex flex-row justify-content-center align-items-center">
            <div className="container col-4">
              <StockChart company={selectedCompany} />
            </div>

            <div className="card" style={newsContainerStyles}>
              <NewsContainer company={selectedCompany} />
            </div>
          </div>
          <div className="mt-5">
            <h3>
              Suggestion: <span>{buy ? buyText : sellText}</span>{" "}
            </h3>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Fragment>
  );
};

export default CompanyPage;
