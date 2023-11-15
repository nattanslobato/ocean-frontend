import { useParams } from "react-router-dom"

export default function ReadById(){
    const { id } = useParams()

    const apiUrl = `https://rickandmortyapi.com/api/character/{id}`
    //ToDo: Implementar o carregamento da API.
    //ToDo: Salvar as informações em um estado.
    //ToDo: Exibir essas informações no JSX.


    return (
        <div>ReadById: {id}</div>
    )
}