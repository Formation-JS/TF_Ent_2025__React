import { useActionState } from 'react';
import { postNewMovie } from '../../services/movie.service';

export default function MovieAddForm() {

    const movieAddAction = async (state, formData) => {
        // Récuperation "fictive" des données du formulaire
        const data = {
            "name": "La La Land",
            "desc": "Un pianiste de jazz et une actrice en devenir tentent de réaliser leurs rêves à Los Angeles.",
            "yearRelease": 2016,
            "real": { "firstname": "Damien", "lastname": "Chazelle" },
            "genres": ["Comédie musicale", "Romance"],
            "images": "https://image.tmdb.org/t/p/original/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
        };

        try {
            // Utilisation d'un service pour envoyer une requete POST
            const result = await postNewMovie(data);

            // Mise à jour du state (Réussi)
            return {
                message: `Le film à été ajouter à l'id : ${result.id}`
            }
        }
        catch {
            // Mise à jour du state (Echec de la requete)
            return {
                message: `Erreur lors de l'ajout du film !`
            }
        }
    };

    const [state, handleAddMovie, isPending] = useActionState(movieAddAction, { message: null })

    return (
        <form action={handleAddMovie}>

            {/* TODO Faire le formulaire :o */}

            <button type='submit' disabled={isPending}>Ajouter un film</button>

            {state.message && (
                <span>{state.message}</span>
            )}

        </form>
    );
}