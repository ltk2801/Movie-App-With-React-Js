import React, { useState, useEffect } from "react";
import styles from "./CastDetail.module.css";
import useApi from "../../hooks/use-api.js";

const apiKey = "84d36999d9bcfb370f9d30cece500668";

const MovieDetail = (props) => {
  const [castMovie, setCastMovie] = useState();
  const { id } = props;

  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;

  useEffect(() => {
    const transformData = (data) => {
      setCastMovie(data.cast.slice(0, 20));
    };

    sendRequest(
      {
        url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
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
    <div className={styles.casts}>
      <h2>Một số diễn viên chính</h2>
      <div className={styles["casts-list"]}>
        {castMovie.map((data) => (
          <div className={styles["cast-detail"]} key={data.id}>
            <img
              src={`https:/image.tmdb.org/t/p/original${data.profile_path}`}
              alt={data.id}
            />
            <p>
              {data.name} ( {data.character} )
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieDetail;
