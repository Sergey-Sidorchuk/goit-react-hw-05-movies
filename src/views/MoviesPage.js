import { useState, useEffect } from 'react';
import Searchbar from '../components/SearchBar/SearchBar';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import { fetchMovieSearch } from '../services/Api';

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    
useEffect(() => {
        if (!query) {
            return;
        }

 fetchMovieSearch(query).then(request => {
            setMovies(request.results);
        });
    },[query])

 const onClick = request => {
        setQuery(request);
}

    return (
        <>
            <Searchbar onClick={onClick} />
            
            {movies && <MoviesGallery movies={movies} />}
        </>
    )
};