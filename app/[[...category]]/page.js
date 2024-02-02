import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

import {
  fetchMovieApi,
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
} from "../../services/movie";
async function HomePage({ params }) {
  // const { results: topRatedMovies } = await getTopRatedMovies()
  // const { results: popularMovies } = await getPopularMovies()

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getCategories()
  ]);

  let selectedCategory;

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
