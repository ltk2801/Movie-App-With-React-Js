import React, { useState, useEffect } from "react";
import styles from "./MovieList.module.css";
import useApi from "../../hooks/use-api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieTrailer from "../MovieTrailer/MovieTrailer";

const MovieList = (props) => {
  const [movies, setMovies] = useState();
  // const [isShowTrailer, setIsShowTrailer] = useState(false);
  const [idMovie, setIdMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;

  useEffect(() => {
    const transformData = (data) => {
      setMovies([...data.results]);
    };

    sendRequest(
      {
        url: props.api,
      },
      transformData
    );
  }, [sendRequest, props.api]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const showTrailerHandler = (movie) => {
    if (movie.id === idMovie) {
      setIdMovie(null);
      return;
    }
    setSelectedMovie(movie);
    setIdMovie(movie.id);
  };

  return (
    <React.Fragment>
      <h3 className={styles.title}>{props.title}</h3>
      <Slider {...settings} className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <img
              src={`https:/image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.name}
              onClick={showTrailerHandler.bind(null, movie)}
            />
          </div>
        ))}
      </Slider>
      {idMovie && <MovieTrailer movieId={idMovie} movieData={selectedMovie} />}
    </React.Fragment>
  );
};

export default MovieList;
