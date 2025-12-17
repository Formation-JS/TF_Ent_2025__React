import { Suspense, use } from 'react';
import { fetchAllMovie } from '../../services/movie.service';
import MovieList from '../../components/MovieList/MovieList';

export default function MovieListRequester() {
    const moviesPromise = fetchAllMovie();

    return (
        <Suspense fallback={<p>Chargement...</p>}>
            <MovieListRequesterInner promise={moviesPromise} />
        </Suspense>
    )
};

function MovieListRequesterInner ({promise}) {
    const movies = use(promise);

    return (
        <MovieList movies={movies} />
    )
}