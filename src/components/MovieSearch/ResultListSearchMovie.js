import React, { useState, useEffect } from "react";
import styles from "./ResultListSearchMovie.module.css";
import useApi from "../../hooks/use-api.js";
import { Link } from "react-router-dom";

const token = "84d36999d9bcfb370f9d30cece500668";

const ResultListSearchMovie = (props) => {
  const { keyMovie } = props;
  const [arrMoviesSearch, setArrMoviesSearch] = useState();

  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;

  useEffect(() => {
    const transformData = (data) => {
      setArrMoviesSearch(data.results);
    };

    sendRequest(
      {
        url: `https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${keyMovie}&language=en-US`,
      },
      transformData
    );
  }, [sendRequest, keyMovie]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <React.Fragment>
      <h4 className={styles.title}>Search Result</h4>
      <div className={styles.listMovie}>
        {arrMoviesSearch.map((data) => (
          <Link to={`/detail/${data.id}`} key={data.id}>
            {" "}
            <div className={styles.imgMovie} key={data.id}>
              {" "}
              <img
                src={`https:/image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={data.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ResultListSearchMovie;
