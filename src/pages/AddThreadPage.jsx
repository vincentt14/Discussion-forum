import React from "react";
import useInput from "../hooks/useInput";
import DoneButton from "../components/DoneButton";
import { asyncAddThread } from "../states/threads/action";
import { useDispatch } from "react-redux";

const AddThreadPage = () => {
  const [title, handleTitleChange] = useInput();
  const [body, handleBodyChange] = useInput();
  const dispatch = useDispatch();

  const SubmitThread = () => {
    dispatch(asyncAddThread(title, body));
  };

  return (
    <section className="add-new-page">
      <div className="container">
        <h1 className="my-3">Buat diskusi Baru</h1>
        <div className="add-new-page__input container">
          <input className="add-new-page__input__title mb-3 p-3" placeholder="Masukkan Title" onChange={handleTitleChange} />
          <div className="add-new-page__input__body p-3" data-placeholder="Isi Diskusi ...." contentEditable onInput={handleBodyChange} />
        </div>
        <DoneButton addThread={SubmitThread} />
      </div>
    </section>
  );
};

export default AddThreadPage;
