import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsContainer = (props) => {
  const API_KEY = "12cbccb209b3423394dba4735372835e";
  const companyTitle = props.company.company;
  const fromDate = "2020-12-12";
  const toDate = "2020-12-14";

  const [newsArticles, setNewsArticles] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${encodeURI(
          companyTitle
        )}&from=${fromDate}&to=${toDate}?country=us&sortBy=time&apiKey=${API_KEY}`
      )
      .then((response) => {
        setNewsArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [companyTitle]);

  return (
    <Fragment>
      {newsArticles ? (
        <div className="card">
          {newsArticles.map((article, id) => {
            return (
              <NewsItem
                source={article.source.name}
                headline={article.title}
                description={article.description}
                time={article.publishedAt}
              />
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default NewsContainer;
