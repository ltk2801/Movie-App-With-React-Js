import React from "react";
import url from "../../services/api";
import MovieList from "./MovieList";
import styles from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <div className={styles["movies-list"]}>
      <MovieList api={url.fetchNetflixOriginals} title="" />;
      <MovieList api={url.fetchTrending} title="Xu hướng" />;
      <MovieList api={url.fetchTopRated} title="Xếp hạng cao" />;
      <MovieList api={url.fetchActionMovies} title="Hành động" />;
      <MovieList api={url.fetchComedyMovies} title="Hài" />;
      <MovieList api={url.fetchHorrorMovies} title="Kinh dị" />;
      <MovieList api={url.fetchRomanceMovies} title="Lãng mạn" />;
      <MovieList api={url.fetchDocumentaries} title="Tài liệu" />;
    </div>
  );
};

export default MoviesList;
