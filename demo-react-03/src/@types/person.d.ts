// Pour les fichiers du typages
// - <name>.ts   : Fichier TypeScript
// - <name>.d.ts : Fichier de déclaration TypeScript

// Dans un fichier "<name>.d.ts", vous ne pouvez mettre que la déclaration du typage.

export type PersonId = `${string}-${number}`;

export type Person = {
    id: PersonId;
    email: string;
    age: number;
}