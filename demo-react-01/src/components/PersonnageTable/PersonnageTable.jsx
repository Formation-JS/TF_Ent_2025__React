export default function PersonnageTable({ personnages }) {

    return (
        <table>
            <PersonnageTableHead />
            <tbody>
                {personnages.map(perso => (
                    <PersonnageTableRow key={perso.id} {...perso} />
                ))}
            </tbody>
        </table>
    )
}

function PersonnageTableHead() {
    return (
        <thead>
            <tr>
                <th>Nom</th>
                <th>Pseudo</th>
                <th>Courriel</th>
            </tr>
        </thead>
    )
}

function PersonnageTableRow({firstname, lastname, nickname, email}) {
    return (
        <tr>
            <td>{firstname} {lastname}</td>
            <td>{nickname}</td>
            <td>{email}</td>
        </tr>
    )
}
