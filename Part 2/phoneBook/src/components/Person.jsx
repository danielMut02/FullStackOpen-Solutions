const Person = ({name, number, onClick}) =>
    
    <div>
        <p>{name} {number}</p> <button onClick={onClick}>delete</button>
    </div>

export default Person