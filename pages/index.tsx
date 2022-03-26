import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "6c2a18c3a603a48a447e48c59ffd5b1a";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();

      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title={"Home"} />
      {!movies && <h4>loading...</h4>}
      {movies?.map((movie: any) => (
        <div key={movie?.id}>
          <h4>{movie?.title}</h4>
        </div>
      ))}
    </div>
  );
}
