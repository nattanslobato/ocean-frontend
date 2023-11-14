import './App.css'
import Card from './components/Card/Card.jsx';

function App() {

  const item1 = {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"]

  }
  const item2 = {
    name: "Morty Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"]
    
  }
  const item3 = {
    name: "Summer Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    tags: ["qualquer coisa"]
    
  }

  const item4 = {
    name: "Beth Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    
  }

  const items = [item1, item2, item3, item4]

  
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

export default App
