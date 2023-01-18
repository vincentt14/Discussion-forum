import React from "react";
import ThreadItem from "./ThreadItem";

const ThreadLists = ({ threads }) => {
  return (
    <div className="container">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
};

export default ThreadLists;
