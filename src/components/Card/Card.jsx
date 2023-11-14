import Tag from '../Tag/Tag.jsx';

export default function Card(props){
  const tags = props.item.tags || []

    return (
        <div className="card">
        <h2>{props.item.name}</h2>
        <div className="tags">
        {tags.map(function(element){
        return <Tag text={element}/>
        })}
        </div>
        <img src={props.item.image} />
      </div>
    )
}