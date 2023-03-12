import React from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import { useParams } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail/MovieDetail.js";
import CastDetail from "../../components/MovieDetail/CastDetail.js";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="app">
      <Navbar />
      <MovieDetail id={id} />
      <CastDetail id={id} />
      <Footer />
    </div>
  );
};

export default Detail;
