import React, { useEffect, useState } from "react";
import styles from "./MovieTrailer.module.css";
import useApi from "../../hooks/use-api";
import YouTube from "react-youtube";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const MovieTrailer = (props) => {
  const { movieData } = props;

  const [dataArrMovieTrailer, setArrDataMovieTrailer] = useState(null);

  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;

  useEffect(() => {
    const transformData = (data) => {
      setArrDataMovieTrailer(data.results);
    };

    sendRequest(
      {
        url: `https://api.themoviedb.org/3//movie/${props.movieId}/videos?api_key=84d36999d9bcfb370f9d30cece500668`,
      },
      transformData
    );
  }, [sendRequest, props.movieId]);

  const selectedMovieData = dataArrMovieTrailer
    ? dataArrMovieTrailer
        .filter((movie) => {
          if (
            movie.site === "YouTube" &&
            (movie.type === "Trailer" || movie.type === "Teaser")
          ) {
            return true;
          }
          return false;
        })
        .sort((a, b) => {
          if (a.type === "Trailer" && b.type !== "Trailer") {
            return -1;
          }
          return 0;
        })[0]
    : null;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className={styles.error}>Error : {error}</div>;
  }

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={styles["movie-detail"]}>
      <div className={styles["movie-content"]}>
        <h3>{movieData.name || movieData.title}</h3>
        <h5>
          Release Date: {movieData.first_air_date || movieData.release_date}
        </h5>
        <h5>Vote : {movieData.vote_average} / 10</h5>
        <p>{movieData.overview.slice(0, 700)}...</p>
        <div className={styles["btn-div"]}>
          <Link to={`/detail/${movieData.id}`}>
            {" "}
            <Button type="button">Play</Button>
          </Link>
          <Button>My List</Button>
        </div>
      </div>
      <div className={styles["movie-content"]}>
        {selectedMovieData ? (
          <YouTube videoId={selectedMovieData.key} opts={opts} />
        ) : (
          <img
            src={`https:/image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt={movieData.name}
          />
        )}
      </div>
    </div>
  );
};

export default MovieTrailer;
