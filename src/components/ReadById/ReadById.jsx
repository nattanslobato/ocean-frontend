import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ReadById.css"

export default function ReadById() {
    const { id } = useParams()

    const [item, setItem] = useState({})

    async function carregarDadosApi() {
        const apiUrl = `https://rickandmortyapi.com/api/character/${id}`

        const response = await fetch(apiUrl)

        const body = await response.json()
        
        setItem(body)

        //ToDo: Implementar o carregamento da API.
        //ToDo: Salvar as informações em um estado.

    }
    useEffect(function () {
        carregarDadosApi()
    }, [])
    //ToDo: Exibir essas informações no JSX.


    return (
<div className="main">
      <div className="image-wrapper">
        <img src={item.image} alt="Imagem do Personagem" />
      </div>

      <div className="info">
        <div className="info-tag">Status: {item.status}</div>

        <div className="info-title">{item.name}</div>

        <div className="info-row">
          <div className="info-label">Species:</div>
          <div className="info-text">{item.species}</div>
        </div>

        <div className="info-row">
          <div className="info-label">Gender:</div>
          <div className="info-text">{item.gender}</div>
        </div>

        <div className="info-row">
          <div className="info-label">Origin:</div>
          <div className="info-text">{item.origin?.name}</div>
        </div>

        <div className="info-row">
          <div className="info-label">Location:</div>
          <div className="info-text">{item.location?.name}</div>
        </div>
      </div>
    </div>
    )
}