import React, { useState } from "react";
import styles from "./SearchFormMovie.module.css";
import SearchIcon from "../Navbar/SerchIcon";

const SearchFormMovie = (props) => {
  const [enterValue, setEnteredValue] = useState("");
  const [hasError, setHasError] = useState(null);

  const movieSearchClasses = hasError
    ? `${styles["search-input"]} ${styles.invalid}`
    : `${styles["search-input"]}`;
  const valueChangHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setHasError(null);
  };

  const reset = () => {
    setEnteredValue("");
    setHasError(null);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (enterValue.trim() !== "") {
      setHasError(false);
      props.keySearch(enterValue);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={styles["search-form"]}>
      <div className={movieSearchClasses}>
        <input
          type="text"
          id="keySearch"
          onChange={valueChangHandler}
          onBlur={valueBlurHandler}
          value={enterValue}
        />
        {hasError && (
          <span className={styles["error-text"]}>
            Key search must not be empty.
          </span>
        )}
        <SearchIcon className={styles.icon} />
      </div>
      <div className={styles["search-button"]}>
        <button className={styles.btnReset} onClick={reset}>
          RESET
        </button>
        <button className={styles.btnSearch} onClick={searchHandler}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchFormMovie;
