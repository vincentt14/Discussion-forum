import React from "react";
import { postedAt } from "../utils";
import parse from "html-react-parser";

const ThreadDetail = ({ body, createdAt, owner, title }) => {
  const isString = (body) => {
    return body.search("<div>");
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {isString(body) === -1 ? <p className="card-text">{body}</p> : <div className="card-text">{parse(body)}</div>}
        <p className="card-subtitle mb-2 text-muted">
          Created by: {owner.name} - {postedAt(createdAt)}
        </p>
      </div>
    </div>
  );
};

export default ThreadDetail;
