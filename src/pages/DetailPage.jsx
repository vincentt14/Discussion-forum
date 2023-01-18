import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ThreadDetail from "../components/ThreadDetail";
import { asyncRecieveThreadDetail } from "../states/threadDetail/action";

const DetailPage = () => {
  const { id } = useParams();
  const { detailThread = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncRecieveThreadDetail(id));
  }, [id, dispatch]);

  if (!detailThread) {
    return null;
  }
  return (
    <section>
      <ThreadDetail {...detailThread} />
    </section>
  );
};

export default DetailPage;
