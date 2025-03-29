import "../style/cartItem.css"

export function CartItem({image, name, quantity, price}){
    return(
        <div className="cartItem">
            <div className="cart-item-image">
                <img src={image}/>
            </div>
            <div className="cart-item-details">
                <h4>{name}</h4>
                <p>Cantidad: {quantity}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}