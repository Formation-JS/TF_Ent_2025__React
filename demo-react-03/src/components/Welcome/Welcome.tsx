type WelcomeProps = {
    firstname: string;
    lastname: string;
    tech?: string
};
export default function Welcome({ firstname, lastname, tech = 'TypeScript' } : WelcomeProps) {
 
    return (
        <div>
            <p>Bonjour {firstname} {lastname}</p>
            <p>Démo l'utilisation du { tech } !</p>
        </div>
    )
}