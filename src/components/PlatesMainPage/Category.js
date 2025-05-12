import "../../styles/Category.css"

export function Category({name, imageUrl}){
    return(
        <div className="categoryWidget">
            <img src={imageUrl}/>
            <p>{name}</p>
        </div>
    )
}