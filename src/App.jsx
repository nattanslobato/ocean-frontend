import './App.css'
import Card from './components/Card/Card.jsx';

function App() {

  const item1 = {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    
  }
  const item2 = {
    name: "Morty Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    
  }
  const item3 = {
    name: "Summer Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    
  }

  const item4 = {
    name: "Beth Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    
  }

  const items = [item1, item2, item3, item4]

  return (
    <>
      {items.map(function(element){
        return <Card item={element}/>
      })}
    </>
  )
}

export default App
