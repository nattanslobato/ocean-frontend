import { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';

export default function Home() {

  const [items, setItems] = useState([])
  
  async function carregarDadosApi(){
    const apiUrl = "https://rickandmortyapi.com/api/character/"

    const response = await fetch(apiUrl)
    const body = await response.json()
    const results = body.results.map(function(element){
      return {
        id: element.id,
        name: element.name,
        image: element.image,
        tags: [
          `Status: ${element.status}`,
          `Specie: ${element.species}`,
          `Origin: ${element.origin.name}`
        ]
      }
    })

    setItems(results)
  }

  useEffect(function(){
    carregarDadosApi()
  }, [])

  return (
    <>
    <div className="cards">
      {items.map(function(element){
        return <Card item={element}/>
      })}
    </div>
    </>
  )
}
