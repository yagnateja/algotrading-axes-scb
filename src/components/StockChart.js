import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

const StockChart = (props) => {
  const API_KEY = "P654EDCLDQTNV87I";
  const companyTitle = props.company.company;

  const [stockData, setStockData] = useState();

  useEffect(() => {
    const companySymbol = props.company.symbol;

    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${companySymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`
      )
      .then((response) => {
        let xValues = [];
        let yValues = [];

        for (let key in response.data["Time Series (5min)"]) {
          xValues.push(key);
          yValues.push(response.data["Time Series (5min)"][key]["1. open"]);
        }

        setStockData([xValues, yValues]);
      });
  }, []);

  return (
    <Fragment>
      {stockData ? (
        <div>
          <Plot
            data={[
              {
                x: stockData[0],
                y: stockData[1],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 720, height: 440, title: companyTitle }}
          />
        </div>
      ) : (
        <div>Receiving Data</div>
      )}
    </Fragment>
  );
};

export default StockChart;
