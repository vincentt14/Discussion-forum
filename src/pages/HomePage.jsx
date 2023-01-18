import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import asyncPopulateUsersAndThreads from "../states/shared/action";

const HomePage = () => {
  const { threads = [], users = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch])

  // const threadList = threads.map((thread) => {
  //   ...threads,
  // })
  console.log(threads);

  return (
    <section className="container">
      <h1 className="my-3">Diskusi tersedia</h1>
      <div className="alllthreadsss">

      </div>
    </section>
  );
};

export default HomePage;
