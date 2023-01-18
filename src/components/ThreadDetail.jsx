import React from "react";

const ThreadDetail = ({body, createdAt, ownerId, title}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <h6 className="card-subtitle mb-2 text-muted">{postedAt(createdAt)}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{ownerId}</h6>
      </div>
    </div>
  );
}

export default ThreadDetail;