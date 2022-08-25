//rf + tab
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  //Permite cambiar los parámetros del navegador
  const history = useNavigate();


  const handleSubmit = (event) => {
    // Así no se refresca el formulario cuando realizamos una búesqueda
    event.preventDefault();
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      {/* Mejor poner los inputs dentro de los form */}
      <div className={styles.searchBox}>
        {/* Controlar valor de un input */}
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Title"
          aria-label="SearchMovies"
          value={search}
          onChange={(event) => {
            const value = event.target.value;
            history("/?search=" + value);
          }}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
