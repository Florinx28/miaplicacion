import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg  } from "../utils/getMovieImg";

export function MovieDetails() {
  const { movieId } = useParams();
  //Estado de la transacción de la información del servidor
  const [isLoading, setIsLoading] = useState(true);
  const moviesState = useState(null);




  const movie = moviesState[0];
  const setMovie = moviesState[1]; // Función para cambiar las movies

  //Llamada asíncrona para acceder al servidor
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      //pelicula ya cargada
      setMovie(data);
      setIsLoading(false);
      console.log(movie);
    });
  }, [movieId]); // Volverá a cargar siempre y cuando cambie este valor


  if(isLoading){
    return <Spinner/>
  }

  if(!movie){
    return null;
  }

  const imageUrl = getMovieImg (movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        className={styles.col + " " + styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      ></img>
      <div className={styles.col + " " + styles.movieDetails}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres
            .map(function (genre) {
              return genre.name;
            })
            .join(", ")}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
