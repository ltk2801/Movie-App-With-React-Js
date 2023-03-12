import React, { useState, useEffect } from "react";
import styles from "./MovieDetail.module.css";
import useApi from "../../hooks/use-api.js";
import Button from "../UI/Button";

const apiKey = "84d36999d9bcfb370f9d30cece500668";

const MovieDetail = (props) => {
  const [dataMovie, setDataMovie] = useState();
  const { id } = props;

  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;

  useEffect(() => {
    const transformData = (data) => {
      setDataMovie(data);
    };

    sendRequest(
      {
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`,
      },
      transformData
    );
  }, [sendRequest, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.detail}>
      <div className={styles["detail-content"]}>
        <img
          src={`https:/image.tmdb.org/t/p/original${dataMovie.poster_path}`}
          alt={dataMovie.name}
        />
      </div>
      <div className={styles["detail-content"]}>
        <h2>{dataMovie.title || dataMovie.name} </h2>
        <div className={styles["detail-content-movie"]}>
          <div>
            <h6>Thể loại : </h6>{" "}
            {dataMovie.genres.map((data) => (
              <span key={data.id}>{data.name} </span>
            ))}{" "}
            <span>.</span>
          </div>
          <div>
            <h6>Năm sản xuất : </h6>
            {dataMovie.release_date}
          </div>
          <div>
            <h6>Thời lượng : </h6>
            {dataMovie.runtime}
          </div>
          <div>
            <h6>Ngôn ngữ : </h6>{" "}
            {dataMovie.spoken_languages.map((data) => (
              <span key={data.iso_639_1}>{data.name}, </span>
            ))}
          </div>
          <div>
            <h6>Công ty sản xuất : </h6>
            {dataMovie.production_companies.map((data) => (
              <span key={data.id}>{data.name}, </span>
            ))}
          </div>
          <div>
            <h6>Điểm IMDB : </h6> {dataMovie.vote_average} / 10
          </div>
          <div className={styles["grid-full"]}>
            <h6> Quốc gia : </h6>{" "}
            {dataMovie.production_countries.map((data) => (
              <span key={data.name}>{data.name}, </span>
            ))}
          </div>
          <div className={styles["grid-full"]}>
            <h6>Review : </h6>
            {dataMovie.overview}
          </div>
        </div>
        <div className={styles["btn-div"]}>
          <Button type="button">Play</Button>
          <Button type="button">My List</Button>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
