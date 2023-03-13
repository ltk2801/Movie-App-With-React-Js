import React, { useState, useEffect } from "react";
import ModalTrailer from "../UI/ModalTrailer";
import useApi from "../../hooks/use-api";
import YouTube from "react-youtube";

const MovieTrailer = (props) => {
  const { id } = props;

  const [dataArrMovieTrailer, setArrDataMovieTrailer] = useState(null);

  const apiData = useApi();
  const { isLoading, error, sendRequest } = apiData;

  useEffect(() => {
    const transformData = (data) => {
      setArrDataMovieTrailer(data.results);
    };

    sendRequest(
      {
        url: `https://api.themoviedb.org/3//movie/${id}/videos?api_key=84d36999d9bcfb370f9d30cece500668`,
      },
      transformData
    );
  }, [sendRequest, id]);

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
    return <div className={error}>Error : {error}</div>;
  }

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <ModalTrailer onClick={props.onHideTrailer}>
      {selectedMovieData ? (
        <YouTube videoId={selectedMovieData.key} opts={opts} />
      ) : (
        <h3>Không tìm thấy trailer</h3>
      )}
    </ModalTrailer>
  );
};

export default MovieTrailer;
