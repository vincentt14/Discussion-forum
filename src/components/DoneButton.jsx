import React from "react";
import { FiCheck } from "react-icons/fi";

const DoneButton = ({ addThread }) => {
  return (
    <div className="add-new-page__action">
      <button className="action" title="tambah" type="button" onClick={() => addThread()}>
        <FiCheck />
      </button>
    </div>
  );
};

export default DoneButton;
