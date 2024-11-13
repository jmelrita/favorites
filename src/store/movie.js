import { Store } from "../core/junmel";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    // const res = await fetch(
    //   `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    // );  api/movie.js 파일에 만들어 둔걸 가져오는거임 api키를 서버에 숨긴것
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        title: store.state.searchText,
        page,
      }),
    });
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (err) {
    console.log("searchMovies error:", err);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    });
    store.state.movie = await res.json();
  } catch (err) {
    console.log("getMovieDetails error:", err);
  }
};
