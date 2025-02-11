import { Component } from "../core/junmel";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";

export default class Home extends Component {
  render() {
    const headine = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const movieListMore = new MovieListMore().el;

    this.el.classList.add("container");
    this.el.append(headine, search, movieList, movieListMore);
  }
}
