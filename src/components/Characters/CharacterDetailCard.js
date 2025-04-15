export function CharacterDetailCard({image, name, origin, location, species, gender, type, status}){
    return(
        <div className='characterDetail'>
            <img src={image} alt={name} />
            <div>
                <h1>{name}</h1>
                <p><strong>Origin:</strong> {origin}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Species:</strong> {species}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Type:</strong> {type || 'Unknown'}</p>
                <p><strong>Status:</strong> {status}</p>
            </div>
        </div>
    )
}