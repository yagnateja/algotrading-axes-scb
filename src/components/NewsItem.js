import React, { Fragment } from "react";

const NewsItem = (props) => {
  return (
    <Fragment>
      <div className="container card mb-5">
        <p>{props.source}</p>
        <h4 className="card-title">{props.headline}</h4>
        <hr />
        <div className="card-body">{props.description}</div>
        <p>{props.time}</p>
      </div>
    </Fragment>
  );
};

export default NewsItem;
