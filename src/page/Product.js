import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductListItems from "../components/ProductListItem";
import "../style/productPage.css"

export default function Product(){
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    function addToCart(){
        if(quantity > product.stock){
            alert("No hay suficiente stock")
            return
        }
            
        const cart = localStorage.getItem("cart");
        const cartItems = cart ? JSON.parse(cart) : [];
        const itemInCart = cartItems.find((item) => item.id === product.id)
        

        if(itemInCart){
            if(itemInCart.quantity + quantity > product.stock){
                alert("No hay suficiente stock")
                return
            }

            itemInCart.quantity += quantity
            itemInCart.total += product.price * quantity
        }
        else{
            const newProduct = {
                id: product.id,
                title: product.title,
                quantity: quantity,
                total: product.price * quantity,
                image: product.images[0],
            }
            
            cartItems.push(newProduct)
        }
        
        if(cartItems.length > 5){
            alert("No se pueden agregar más de 5 productos al carrito")
            return
        }
        
        const total = cartItems.reduce((subtotal, item) => subtotal + item.total, 0)

        if(total > 10000){
            alert("El total de la compra no puede superar los 100000")
            return
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));

        alert("Producto agregado al carrito")
    }

    useEffect(()=>{

        const fetchProduct = async () =>{
            const product = await getProductById(id)
            console.log(product)
            setProduct(product)
        }

        fetchProduct()
    },[id])

    return(
        <>
            {product && 
                <div className="productCard">
                    <div className="productImage">
                        <img src={product.images[0]}/>
                    </div>
                    <div className="productDetails">
                        <div>
                            <p id="price">${product.price}</p>
                            <p>Calificación: {product.rating} / 5</p>
                        </div>
                        <div>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                        </div>

                        
                        <p>Cantidad disponible: <strong>{product.stock}</strong></p>
                        <div className="buttonsContainer">
                            <div className="addToCart">
                                <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                                <button onClick={addToCart}>Agregar al carrito</button>
                            </div>
                            <button id="buyNow">Comprar Ahora</button>
                        </div>
                        
                    </div>
                </div>
            }
        </>
        
    )
}

async function getProductById(id){
    const product = await fetch(`https://dummyjson.com/products/${id}`)
    return product.json()
}