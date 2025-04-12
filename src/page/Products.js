import ProductListItems from "../components/ProductListItem"
import { useNavigate } from 'react-router-dom';
import { RedirectToLogin } from "../utils/Redirect";
import { use, useEffect, useState } from "react";

export default function Products(){
    RedirectToLogin()
    const [products, setProducts] = useState([])
    const [word, setWord] = useState(null)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    function renderComponent(){
        if(loading){
            return <div>Cargando...</div>
        }
        else if(!products || products.length === 0 ){
    
            return <div>No hay productos disponibles</div>
        }
        else{
            return (
                products.map((item)=>{
                    return(
                        <ProductListItems key={item.id} title={item.title} id={item.id} description={item.description} images={item.images}/>
                    )}       
                )
            )
        }  
    }

    function getProductFromLocalStorage(){
        const localData = localStorage.getItem("newProducts")
        const newProducts = localData ? JSON.parse(localData) : []
        return newProducts
    }

    useEffect(() => {    
        const fetchProducts = async () => {
            setLoading(true)
            const response = await getProducts()
            let baseProducts = response.products
    
            const newProducts = getProductFromLocalStorage()
    
            setProducts([...baseProducts, ...newProducts])

            setLoading(false)
        }
    
        fetchProducts()
    }, [])

    useEffect(() => {
        const hasWord = word !== null && word !== undefined && word.length > 3
        if (!hasWord) {
            return
        }
    
        const fetchProductsByWord = async () => {
            setLoading(true)
    
            const data = await getProductsByWord(word)
            const baseProducts = data.products
    
            const localProducts = getProductFromLocalStorage()
            const filteredLocalProducts = localProducts.filter(product =>
                product.title.toLowerCase().includes(word.toLowerCase())
            )
    
            setProducts([...baseProducts, ...filteredLocalProducts])
            setLoading(false)
        }
    
        fetchProductsByWord()
    }, [word])

    return(
        <div className="productsPage">
            <input type="text" placeholder="Search" className="inputSearch" onChange={(e) => setWord(e.target.value)}/>
            <div className="container-products">
                {renderComponent()}
            </div>
        </div>
        
    )
}

async function getProducts(){
    const products = await fetch("https://dummyjson.com/products")
    return products.json()
}

async function getProductsByWord(word){
    const products = await fetch(`https://dummyjson.com/products/search?q=${word}`)

    return products.json()
}