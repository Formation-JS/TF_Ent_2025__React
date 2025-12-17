import { useParams, useSearchParams } from 'react-router';

export default function DemoParamRoute() {

    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <h1>Demo parametre de route</h1>
            <p>L'id dans l'url est : {id}</p>

        </>
    );
}