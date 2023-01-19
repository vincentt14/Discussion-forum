/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useInput from '../hooks/useInput';

function ThreadCommentInput() {
  const [comment, onCommentChange] = useInput('');

  return (
    <form>
      <div className="form-floating">
        <textarea className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} value={comment} onChange={onCommentChange} />
        <label htmlFor="floatingTextarea2">Leave a comment here</label>
      </div>
      <button type="button" className="btn btn-outline-primary w-100 mb-3 ">
        Send
      </button>
    </form>
  );
}

export default ThreadCommentInput;
