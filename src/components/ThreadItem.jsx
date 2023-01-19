import React from "react";
import { Link } from "react-router-dom";
import { postedAt } from "../utils";
import parse from "html-react-parser";

const ThreadItem = ({ id, body, createdAt, title }) => {
  const isString = (body) => {
    return body.search("<div>");
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <Link to={`/threads/${id}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
        {isString(body) === -1 ? <p className="card-text">{body}</p> : <div className="card-text">{parse(body)}</div>}
        <p className="card-subtitle mb-2 text-muted">Created {postedAt(createdAt)}</p>
      </div>
    </div>
  );
};

export default ThreadItem;
