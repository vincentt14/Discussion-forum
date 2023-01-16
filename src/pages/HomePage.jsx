import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const { thread = [], users = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch()
  })

  return (
    <section className="container">
      <h1 className="my-3">Diskusi tersedia</h1>
    </section>
  );
};

export default HomePage;
