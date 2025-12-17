import { Suspense, use } from 'react';
import { fetchAllMovie } from '../../services/movie.service';
import MovieList from '../../components/MovieList/MovieList';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

export default function MovieListRequester() {
    const moviesPromise = fetchAllMovie();

    return (
        <Suspense fallback={<LoadingScreen />}>
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