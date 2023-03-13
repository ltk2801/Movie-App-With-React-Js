import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import { useParams } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail/MovieDetail.js";
import CastDetail from "../../components/MovieDetail/CastDetail.js";
import MovieTrailerDetail from "../../components/MovieDetail/MovieTrailerDetail.js";

const Detail = () => {
  const { id } = useParams();
  const [trailerIsShow, setTrailerIsShow] = useState(false);

  const showCartHandler = () => {
    setTrailerIsShow(true);
  };

  const hideCartHandler = () => {
    setTrailerIsShow(false);
  };

  return (
    <div className="app">
      <Navbar />
      {trailerIsShow && (
        <MovieTrailerDetail id={id} onHideTrailer={hideCartHandler} />
      )}
      <MovieDetail id={id} onShowTrailer={showCartHandler} />
      <CastDetail id={id} />
      <Footer />
    </div>
  );
};

export default Detail;
