import { useEffect, useState } from "react";
import { CartItem } from "../components/CartItem";
import "../style/cart.css";
import { RedirectToLogin } from "../utils/Redirect";

export function Cart(){
    RedirectToLogin()
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        const cartItems = cart ? JSON.parse(cart) : [];
        console.log(cartItems);
        setCart(cartItems);
    }, []);

    return(
    <>
        <h1>Carrito de compras</h1>
        <hr/>
        <div className="cart-container">
            {
                cart.map((item) => {
                    return(
                        <CartItem key={item.id} name={item.title} image={item.image} quantity={item.quantity} price={item.total}/>
                    )
                })
            }

        </div>
    </>
    )
}