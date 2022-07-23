import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2022/01/28/960x540/PUBG_New_State_main_1636602574294_1643366330723.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown " : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
