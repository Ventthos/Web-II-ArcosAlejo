import '../style/products.css'
import { Navigate } from 'react-router-dom'
export default function ProductListItems({title, id, description, images}){
    const image = images?.[0] ?? ""
    return(
        <div className="product-list-item" key={id}>
            <div className="product-image">
                <img src={image}/>
            </div>
            <div className="product-details">
                <h4>{description}</h4>
                <p>{title}</p>
                <a href={`/products/${id}`}>Ver producto</a>
            </div>
        </div>
    )

}