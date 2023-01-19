/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../utils/api';
import { asyncRecieveThreadDetail } from '../states/threadDetail/action';

function ThreadCommentInput({ id }) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const createCommentar = async (e) => {
    e.preventDefault();
    await api.createComment({ comment, threadid: id });
    dispatch(asyncRecieveThreadDetail(id));
    setComment('');
  };

  return (
    <form onSubmit={createCommentar}>
      <div className="form-floating">
        <textarea className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} value={comment} onChange={onCommentChange} />
        <label htmlFor="floatingTextarea2">Leave a comment here</label>
      </div>
      <button type="submit" className="btn btn-outline-primary w-100 mb-3">
        Send
      </button>
    </form>
  );
}

ThreadCommentInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ThreadCommentInput;
