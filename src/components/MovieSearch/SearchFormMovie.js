import React from "react";
import styles from "./SearchFormMovie.module.css";
import SearchIcon from "../Navbar/SerchIcon";

const SearchFormMovie = (props) => {
  return (
    <div className={styles["search-form"]}>
      <div className={styles["search-input"]}>
        <input type="text" />
        <SearchIcon className={styles.icon} />
      </div>
      <div className={styles["search-button"]}>
        <button className={styles.btnReset}>RESET</button>
        <button className={styles.btnSearch}>SEARCH</button>
      </div>
    </div>
  );
};

export default SearchFormMovie;
