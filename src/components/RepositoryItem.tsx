import {Repository} from "../models/repositoryModel";

interface RepositoryItemProps {
    repository: Repository
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    )
}