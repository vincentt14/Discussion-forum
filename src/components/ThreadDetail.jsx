import React from "react";
import { postedAt } from "../utils";
import parse from "html-react-parser";

const ThreadDetail = ({ body, createdAt, owner, title }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{parse(body)}</p>
        <p className="card-subtitle mb-2 text-muted">
          Created by: {owner.name} - {postedAt(createdAt)}
        </p>
      </div>
    </div>
  );
};

export default ThreadDetail;
