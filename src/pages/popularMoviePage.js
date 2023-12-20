import React, { useState } from "react";
import { getPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PaginationComponent from "../components/pagination";

const PopularMoviePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['popular', { page: currentPage }], () => getPopular(currentPage));

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const popularMovies = data.results;
  const totalPages = data.total_pages;

  // Redundant, but necessary to avoid app crashing.
  const favorites = popularMovies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <div>
      <PageTemplate
        title="Popular Movies"
        movies={popularMovies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
  
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        handlePagination={(page) => setCurrentPage(page)}
      />
    </div>
  );


};
export default PopularMoviePage;