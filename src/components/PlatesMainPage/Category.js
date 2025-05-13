import "../../styles/Category.css"

export function Category({name, imageUrl, active, onClick}){
    return(
        <button className="categoryWidget" onClick={onClick} style={active?{backgroundColor: "#febc2e"}:{}}>
            <img src={imageUrl}/>
            <p style={active?{color: "var(--backgroundBlue)"}:{}}>{name}</p>
        </button>
    )
}