import React, { useEffect, useState } from "react";
import useApi from "../../hooks/use-api";
import url from "../../services/api";
import Button from "../UI/Button";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const [movie, setMovie] = useState();
  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;
  useEffect(() => {
    const transformData = (data) => {
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    sendRequest(
      {
        url: url.fetchNetflixOriginals,
      },
      transformData
    );
  }, [sendRequest]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  let banner = null;
  if (movie) {
    banner = (
      <React.Fragment>
        <img
          src={`https:/image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.name}
          key={movie.id}
          className={styles.img}
        />
        <div className={styles["banner-content"]}>
          <div className={styles["banner-flex"]}>
            <h1>{movie.name}</h1>
            <div className={styles["banner-button"]}>
              <Link to={`/detail/${movie.id}`}>
                {" "}
                <Button type="button">Play</Button>
              </Link>

              <Button type="button">My List</Button>
            </div>
            <div>
              <span>{movie.overview.slice(0, 400)}...</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return <div className={styles.banner}>{banner}</div>;
};

export default Banner;
