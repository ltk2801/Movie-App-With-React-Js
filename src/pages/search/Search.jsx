import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.js";
import ResultListSearchMovie from "../../components/MovieSearch/ResultListSearchMovie.js";
import SearchFormMovie from "../../components/MovieSearch/SearchFormMovie.js";
import Navbar from "../../components/Navbar/Navbar.js";
const Search = () => {
  const [keySearch, setKeySearch] = useState("");

  const keySearchHandler = (key) => {
    setKeySearch(key);
  };

  return (
    <div className="app">
      <Navbar />
      <SearchFormMovie keySearch={keySearchHandler} />
      <ResultListSearchMovie keyMovie={keySearch} />
      <Footer />
    </div>
  );
};

export default Search;
