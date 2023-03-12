import React from "react";
import Banner from "../../components/Banner/Banner.js";
import Footer from "../../components/Footer/Footer.js";
import MoviesList from "../../components/MovieList/MoviesList.js";
import Navbar from "../../components/Navbar/Navbar.js";

function Browse() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default Browse;
