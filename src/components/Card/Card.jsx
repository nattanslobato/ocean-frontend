import Tag from '../Tag/Tag.jsx';

export default function Card(props){
    return (
        <div className="card">
        <h2>{props.item.name}</h2>
        <div className="tags">
          <Tag text="Status: Vivo"/>
          <Tag text="Espécie: Humana"/>
          <Tag text="Origem: Terra C-137"/>
        </div>
        <img src={props.item.imageUrl} />
      </div>
    )
}