import { useEffect, useState } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const useFetch = (urlPrams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        // console.log(data)
        setData(data.Search||data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT} ${urlPrams}`);
  }, [urlPrams]);

  return { loading, error, data };
};

export default useFetch;
