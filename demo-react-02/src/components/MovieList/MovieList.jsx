export default function MovieList({ movies }) {

    return (
        <ul>
            {movies.map(movie => (
                <MovieListItem key={movie.id} {...movie} />
            ))}
        </ul>
    )
}

function MovieListItem({ id, name, yearRelease, genres, images, real }) {

    return (
        <li>
            <p>{name} ({yearRelease})</p>
            <p>Réalisateur: {real.firstname} {real.lastname}</p>
            <p>Genre : {genres.join(', ')}</p>
            <img src={images} alt={`Image du film "${name}"`} height='100' />
        </li>
    );
}
