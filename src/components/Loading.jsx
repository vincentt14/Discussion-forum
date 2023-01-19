import React from "react";
import LoadingBar from "react-redux-loading-bar";

const Loading = () => {
  return (
    <div className="loading">
      <LoadingBar style={{ backgroundColor: '#4877fd' }}/>
    </div>
  );
};

export default Loading;
