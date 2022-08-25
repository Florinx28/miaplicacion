import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";


//Desplegar apliación en Internet
//https://www.youtube.com/watch?v=aCEn6_BHZyI&list=PL9T-KKyKXNClsgm8o1mKQH7Wc2fNqUOOF&index=5


//Recuerda instalar react router con el import en caso de que no lo este. Además de importarlo
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { MovieDetails } from "./pages/MovieDetails"; //Control espacio para importar más rápido
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    //El Switch y el Route siempre han de ir dentro de un Router
    <Router>
      <header>
      <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>

        {/* Mejor que la eqtiqueta "<a>" debido a que no recarga la página, 
        entonces no ha de ir otra vez al servidor a por los datos. */}
        {/* <Link to="/movie">Movie</Link> 
         <br/> 
        <Link to="/">Home</Link> */}
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
