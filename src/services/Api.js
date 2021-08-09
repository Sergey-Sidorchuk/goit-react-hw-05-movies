const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '29c122ea3ad632aa8521fb575bc63d66';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandl(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));

}

export function fetchTrendingMovies() {
    return fetchWithErrorHandl(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

export function fethMoviesId(movieId) {
    return fetchWithErrorHandl(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);

}

export function fetchMovieSearch(query) {
    return fetchWithErrorHandl(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    
}

export function fetchMovieCast(movieId) {
    return fetchWithErrorHandl(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
}

export function fetchMovieReviews(movieId) {
    return fetchWithErrorHandl(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
}
