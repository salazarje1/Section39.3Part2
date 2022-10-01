import './Pokecard.css'; 

const Pokecard = ({id, name, type, xp}) => {
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h4 className="Pokecard-title">{name}</h4>
            <img src={imgURL} alt="" class="Pokecard-img" />
            <ul className="Pokecard-ul" >
                <li className="Pokecard-li">Type: {type}</li>
                <li className="Pokecard-li">EXP: {xp}</li>
            </ul>
        </div>
    )
}

export default Pokecard; 