import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

//Realizar las búsquedas

export function MoviesGrid() {
  const moviesState = useState([]);

  const movies = moviesState[0];
  const setMovies = moviesState[1]; // Función para cambiar las movies

  // us mas tab
  const [isLoading, setIsLoading] = useState(true);

  //estado para el scroll infinito
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  //Obtenemos las palabras del buscador
  const query = useQuery();
  const search = query.get("search");

  //El debugger es la ostia
  /*Para abrir el debuger hay que abrir en el buscador de arriba el Debug: Open Link*/

  //No se pueden llamar a APIs desde componentes hay que hacer uso de Hooks, se carga el effect una vez se haya cargado el resto
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies(prevMovies => prevMovies.concat(data.results)); // Ahora se ha de volver a cargar para cargar las películas para ello se uta el State
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]); //Siempre se ha de poner para que solo se cargue una sola vez

  if(!isLoading && movies.length === 0){
    return <Empty/>
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader = {<Spinner/>}
    >
      <ul className={styles.moviesGrid}>
        {movies.map(function (movie) {
          // Mayor rendimiento en las li mediante las KEY
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </InfiniteScroll>
  );
}
