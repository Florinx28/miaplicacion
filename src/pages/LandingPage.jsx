import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDeboune";
import { useQuery } from "../hooks/useQuery"; //cntrl + spacio

export function LandingPage() {

  const query = useQuery();
  const search = query.get("search");
  
  const debouncedSearch = useDebounce(search,300);
  return (
    <div>
      <Search />
      {/* Con la clave, si se cambia se destruye el componenete y se vuelve a cargar todo desde 0 */}
      <MoviesGrid key={debouncedSearch} search = {debouncedSearch} /> 
    </div>
  );
}
