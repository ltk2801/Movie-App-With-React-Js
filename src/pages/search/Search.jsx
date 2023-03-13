import React from "react";
import Footer from "../../components/Footer/Footer.js";
import SearchFormMovie from "../../components/MovieSearch/SearchFormMovie.js";
import Navbar from "../../components/Navbar/Navbar.js";
const Search = () => {
  return (
    <div className="app">
      <Navbar />
      <SearchFormMovie />
      <Footer />
    </div>
  );
};

export default Search;
